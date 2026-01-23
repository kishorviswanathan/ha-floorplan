import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { FloorplanConfig, EntityConfig, EntityState } from '../types/floorplan';
import { v4 as uuidv4 } from 'uuid';
import defaultConfig from '../default_config';

export const useFloorplanStore = defineStore('floorplan', () => {
    // Initial state from default config
    const config = ref<FloorplanConfig>({
        ...defaultConfig,
        id: defaultConfig.id || uuidv4(),
        entities: defaultConfig.entities || []
    } as FloorplanConfig);

    const selectedEntityId = ref<string | null>(null);

    // Simulation state for experimentation (entity_id -> state)
    const entityStates = ref<Record<string, EntityState>>({});

    const entities = computed(() => config.value.entities);
    const selectedEntity = computed(() =>
        config.value.entities.find(e => e.id === selectedEntityId.value)
    );

    function setBaseImage(base64: string) {
        config.value.imageBase64 = base64;
    }

    function addEntity(type: EntityConfig['type'] = 'light', x = 50, y = 50) {
        const id = uuidv4();
        const newEntity: EntityConfig = {
            id,
            entityId: `entity.${id.substring(0, 4)}`,
            label: 'New Entity',
            type,
            x,
            y,
            points: [],
            shape: 'circle',
            style: {
                width: 5, // % relative to container width
                height: 5,
                onColor: '#facc15', // yellow-400
                offColor: '#94a3b8', // slate-400
                onOpacity: 0.8,
                offOpacity: 0.3,
                gradientRadius: 30,
                rotation: 0,
                cameraIdleColor: '#6b7280',
                cameraRecordingColor: '#ef4444',
                cameraStreamingColor: '#3b82f6'
            },
            labelConfig: {
                show: true,
                offsetX: 0,
                offsetY: 10, // px or %? Let's assume px for offset relative to center or bottom
                color: '#ffffff',
            }
        };
        config.value.entities.push(newEntity);
        selectedEntityId.value = id;
        entityStates.value[newEntity.entityId] = { state: 'off', brightness: 255 };
    }

    function removeEntity(id: string) {
        const index = config.value.entities.findIndex(e => e.id === id);
        if (index !== -1) {
            config.value.entities.splice(index, 1);
            if (selectedEntityId.value === id) {
                selectedEntityId.value = null;
            }
        }
    }

    function updateEntity(id: string, updates: Partial<EntityConfig>) {
        const entity = config.value.entities.find(e => e.id === id);
        if (entity) {
            Object.assign(entity, updates);
        }
    }

    function toggleEntityState(entityId: string, entityType: string) {
        const current = entityStates.value[entityId] || { state: 'off', brightness: 255 };
        let newState = current;
        if (entityType === 'camera') {
            if (current.state === 'idle') {
                newState = { ...current, state: 'streaming' };
            } else if (current.state === 'streaming') {
                newState = { ...current, state: 'recording' };
            } else {
                newState = { ...current, state: 'idle' };
            }
            newState.shouldLightUp = ['streaming', 'recording'].includes(newState.state);
        } else {
            newState = { ...current, state: current.state === 'off' ? 'on' : 'off' };
            newState.shouldLightUp = newState.state === 'on';
        }
        entityStates.value[entityId] = newState;
    }

    function setEntityState(entityId: string, state: string) {
        const current = entityStates.value[entityId] || { state: 'off', brightness: 255 };
        entityStates.value[entityId] = { ...current, state: state };
    }

    function loadConfig(newConfig: FloorplanConfig) {
        config.value = newConfig;
        // Reset states
        entityStates.value = {};
        newConfig.entities.forEach(e => {
            entityStates.value[e.entityId] = { state: 'off', brightness: 255 };
        });
    }

    function clearConfig() {
        config.value = {
            id: uuidv4(),
            name: 'New Floorplan',
            imageBase64: '',
            entities: []
        };
        selectedEntityId.value = null;
        entityStates.value = {};
    }

    return {
        config,
        entities,
        selectedEntityId,
        selectedEntity,
        entityStates,
        setBaseImage,
        addEntity,
        removeEntity,
        updateEntity,
        toggleEntityState,
        setEntityState,
        loadConfig,
        clearConfig
    };
});
