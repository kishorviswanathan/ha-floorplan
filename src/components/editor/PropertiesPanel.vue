<script setup lang="ts">
import { useFloorplanStore } from '../../stores/floorplan';
import { computed, ref } from 'vue';
import yaml from 'js-yaml';

const store = useFloorplanStore();


const hasSelection = computed(() => !!store.selectedEntityId);
const selectedEntity = computed(() => store.selectedEntity);

function addEntity() {
    store.addEntity('light');
}

function deleteEntity() {
    if (store.selectedEntityId) {
        store.removeEntity(store.selectedEntityId);
    }
}

// Helper to handle auto-prefixing
function getEntitySuffix(fullId: string, type: string): string {
    const prefix = `${type}.`;
    if (fullId.startsWith(prefix)) {
        return fullId.slice(prefix.length);
    }
    return fullId; // fallback if prefix missing or mismatch
}

function updateEntityIdSuffix(event: Event, entity: any) {
    const input = event.target as HTMLInputElement;
    const suffix = input.value;
    const prefix = `${entity.type}.`;
    // Update the store entity
    // We modify the reactive object directly here since it's returned by store.selectedEntity
    // If we wanted to be strict we'd call an action e.g. store.updateEntityId(id, newId)
    // But modifying the property is safe in standard Pinia.
    entity.entityId = `${prefix}${suffix}`;
}

// Config updaters
function exportConfigYaml() {
    const config = JSON.parse(JSON.stringify(store.config)); // Deep copy to avoid mutating store
    
    // Attempt to format imageBase64 as multiline for readability
    // We insert spaces, and js-yaml should pick a folded style (>) if it sees spaces and we allow it.
    if (config.imageBase64 && config.imageBase64.length > 80) {
        config.imageBase64 = (config.imageBase64.match(/.{1,80}/g) || []).join(' ');
    }

    const cardConfig = {
        type: 'custom:ha-floorplan-card',
        config: config
    };

    // dump with lineWidth to force wrapping and use block styles where appropriate
    const yamlStr = yaml.dump(cardConfig, { 
        lineWidth: 80,
        noRefs: true,
        quotingType: '"'
    });
    
    const filename = config.name 
        ? `${config.name.replace(/[^a-z0-9]/yi, '_').toLowerCase()}.yaml` 
        : 'floorplan-config.yaml';
    downloadString(yamlStr, filename, "text/yaml");
}

function downloadString(content: string, filename: string, contentType: string) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", url);
    downloadAnchorNode.setAttribute("download", filename);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    URL.revokeObjectURL(url);
}

const importInput = ref<HTMLInputElement | null>(null);

function triggerImport() {
    importInput.value?.click();
}

function onImportFile(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target?.result) {
                try {
                    const content = e.target.result as string;
                    // Try parsing as YAML (superset of JSON, so works for both)
                    const doc = yaml.load(content) as any;
                    
                    let configToLoad = doc;
                    // Handle wrapped card config
                    if (doc && doc.type === 'custom:ha-floorplan-card' && doc.config) {
                        configToLoad = doc.config;
                    }

                    // Strip newlines/spaces from imageBase64 if imported from block style
                    if (configToLoad && configToLoad.imageBase64) {
                         configToLoad.imageBase64 = configToLoad.imageBase64.replace(/\s/g, '');
                    }

                    if (configToLoad && configToLoad.id && configToLoad.entities) {
                        store.loadConfig(configToLoad);
                    } else {
                        alert('Invalid configuration file: Missing id or entities');
                    }
                } catch (err) {
                    console.error(err);
                    alert('Error parsing configuration file');
                }
            }
        };
        reader.readAsText(target.files[0]);
    }
}

const replaceImageInput = ref<HTMLInputElement | null>(null);

function triggerReplaceImage() {
    replaceImageInput.value?.click();
}

function onReplaceImageFile(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target?.result) {
                store.setBaseImage(e.target.result as string);
            }
        };
        reader.readAsDataURL(target.files[0]);
    }
}

function clearAll() {
    if (confirm('Are you sure you want to clear the entire floorplan config?')) {
        store.clearConfig();
    }
}
// No, strict mode usually warns. 
// We implemented updateEntity action.

defineProps<{
    isDrawing: boolean
}>();

defineEmits(['toggle-draw-mode']);

function clearPoints() {
    if (store.selectedEntityId) {
        store.updateEntity(store.selectedEntityId, { points: [] });
    }
}

// We can use v-model directly on the store's reactive objects if we are careful, 
// or use computed with get/set.
// For simplicity since Pinia state is mutable by default (if not in strict mode), 
// v-model on selectedEntity.x works but bypasses actions. 
// Ideally we validat/actionize. 
// BUT for a local tool, direct mutation is often acceptable if 'store' is just state.
// Let's try direct binding for now for speed, if it fails we wrap.
const version = __APP_VERSION__;
</script>

<template>
  <div class="properties-panel glass-panel">
    <div class="panel-header">
        <h2>Properties</h2>
    </div>
    
    <div class="panel-content">
        <div v-if="!hasSelection" class="global-actions">
            <p class="hint">Select an entity to edit properties, or add new items.</p>
            
            <div class="button-group">
                <button @click="addEntity">Add Entity</button>
            </div>

            <div class="config-actions">
                <h3>Global Config</h3>
                <div class="input-group">
                    <label>Floorplan Name</label>
                    <input type="text" v-model="store.config.name">
                </div>
                
                 <div class="input-group">
                    <label>Floorplan Image</label>
                    <button class="secondary small" @click="triggerReplaceImage">Replace Image</button>
                    <input 
                        ref="replaceImageInput"
                        type="file" 
                        accept="image/*" 
                        class="hidden-input"
                        @change="onReplaceImageFile"
                    >
                </div>

                <div class="io-actions">
                    <button class="secondary" @click="clearAll" style="color: var(--color-danger)">Clear All</button>
                    <button class="secondary" @click="exportConfigYaml">Export YAML</button>
                    <!-- <button class="secondary" @click="triggerImport">Import JSON</button> -->
                    <!-- Import is tricky with YAML without a parser, stick to JSON import? User said "change config format", implies export mainly. Keeping JSON import hidden or converting if needed. -->
                    <button class="secondary" @click="triggerImport">Import YAML</button>
                    <input 
                        ref="importInput"
                        type="file" 
                        accept=".yaml,.yml" 
                        class="hidden-input"
                        @change="onImportFile"
                    >
                </div>
            </div>
        </div>

        <div v-else-if="selectedEntity" class="entity-properties">
            <div class="header-row">
                <h3>{{ selectedEntity.label }}</h3>
                <button class="icon-btn close" @click="store.selectedEntityId = null">X</button>
            </div>

            <div class="scroll-area">
                <div class="input-group">
                    <label>Label</label>
                    <input type="text" v-model="selectedEntity.label">
                </div>
                 <div class="input-group">
                    <label>Type</label>
                    <select v-model="selectedEntity.type">
                        <option value="light">Light</option>
                        <option value="media_player">Media Player</option>
                        <option value="camera">Camera</option>
                    </select>
                </div>

                <div class="input-group">
                    <label>Entity ID</label>
                    <div class="id-input-row" style="display: flex; gap: 4px; align-items: center;">
                        <span class="prefix" style="color: var(--color-text-secondary); font-family: monospace;">{{ selectedEntity.type }}.</span>
                        <input type="text" :value="getEntitySuffix(selectedEntity.entityId, selectedEntity.type)" @input="e => updateEntityIdSuffix(e, selectedEntity)">
                    </div>
                </div>
                
                <div class="section-title">Visuals</div>
                
                <div class="row">
                     <div class="input-group">
                        <label>Shape</label>
                        <select v-model="selectedEntity.shape">
                            <option value="circle">Circle</option>
                            <option value="square">Square</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="input-group">
                        <label>Width (%)</label>
                        <input type="number" v-model="selectedEntity.style.width" step="0.1">
                    </div>
                    <div class="input-group">
                        <label>Height (%)</label>
                        <input type="number" v-model="selectedEntity.style.height" step="0.1">
                    </div>
                </div>
                <div class="row">
                    <div class="input-group">
                        <label>Spread Radius (%)</label>
                        <input type="number" v-model="selectedEntity.style.gradientRadius" step="1">
                    </div>
                </div>

                 <div class="section-title">Default Colors</div>
                 <div class="input-group">
                    <label>On Color</label>
                    <div class="color-picker-row">
                        <input type="color" v-model="selectedEntity.style.onColor">
                        <input type="text" v-model="selectedEntity.style.onColor">
                    </div>
                </div>
                
                <div class="input-group">
                    <label>Off Color</label>
                     <div class="color-picker-row">
                        <input type="color" v-model="selectedEntity.style.offColor">
                        <input type="text" v-model="selectedEntity.style.offColor">
                    </div>
                </div>
                
                <div class="section-title">Label Display</div>
                 <div class="input-group checkbox">
                    <label>
                        <input type="checkbox" v-model="selectedEntity.labelConfig.show">
                        Show Label
                    </label>
                </div>

                <div class="section-title">Light Zone</div>
                <p class="hint small">
                    {{ isDrawing ? 'Click on canvas to add points.' : 'Define a custom shape for light spread.' }}
                </p>
                <div class="input-group inline">
                    <button @click="$emit('toggle-draw-mode')" :class="{ active: isDrawing }">
                        {{ isDrawing ? 'Finish' : 'Draw' }}
                    </button>
                    <button v-if="selectedEntity.points && selectedEntity.points.length > 0" @click="clearPoints" class="secondary">
                        Clear
                    </button>
                </div>

                <div class="danger-actions" style="margin-top: 1rem;">
                    <button class="icon-btn danger" @click="deleteEntity">Remove Entity</button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="panel-footer">
        {{ version }}
    </div>
  </div>
</template>

<style scoped>
.properties-panel {
  width: 300px;
  background-color: var(--color-bg-primary);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 10; /* Ensure above canvas if needed */
}

@media (max-width: 768px) {
  .properties-panel {
    width: 100%;
    height: 40%; /* Take bottom 40% */
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
}

.panel-header {
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.panel-header h2 {
  margin: 0;
  font-size: 1.25rem;
}

.panel-content {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.hint {
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
}

.button-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 2rem;
}

.input-group {
    margin-bottom: 1rem;
}

.input-group.inline {
    display: flex;
    gap: 0.5rem;
}

.input-group label {
    display: block;
    font-size: 0.85rem;
    color: var(--color-text-secondary);
    margin-bottom: 0.25rem;
}

.config-actions, .danger-actions {
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 1rem;
}

.header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.icon-btn.close {
    background: transparent;
    color: var(--color-text-primary);
    padding: 0.5rem;
    font-size: 1.5rem;
}

.icon-btn.danger {
    background: transparent;
    color: var(--color-danger);
    padding: 0.2rem;
}

.icon-btn.danger:hover {
    background: rgba(239, 68, 68, 0.1);
    border-color: var(--color-danger);
}

.section-title {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-accent);
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.row {
    display: flex;
    gap: 0.5rem;
}

.color-picker-row {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.color-picker-row input[type="color"] {
    border: none;
    width: 30px;
    height: 30px;
    padding: 0;
    background: none;
    cursor: pointer;
}

.input-group.checkbox label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-primary);
    cursor: pointer;
}

.io-actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
}

.io-actions button {
    flex: 1;
    font-size: 0.85rem;
    padding: 0.5rem;
}

.hidden-input {
    display: none;
}

button.active {
    background-color: var(--color-primary);
    color: white;
}

.hint.small {
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
}


.hint.small {
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
}

.panel-footer {
    padding: 0.5rem;
    text-align: center;
    font-size: 0.7rem;
    color: var(--color-text-secondary);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: auto; /* Pushes to bottom */
}
</style>
