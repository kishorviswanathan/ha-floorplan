<script setup lang="ts">
import { useFloorplanStore } from '../../stores/floorplan';
import { computed, ref } from 'vue';
import EntityOverlay from './EntityOverlay.vue';

const store = useFloorplanStore();
const fileInput = ref<HTMLInputElement | null>(null);
const isDrawing = ref(false);
const zoomScale = ref(1);

const hasImage = computed(() => !!store.config.imageBase64);

defineExpose({
    isDrawing
});

function zoomIn() {
    zoomScale.value = Math.min(zoomScale.value + 0.2, 2);
}

function zoomOut() {
    zoomScale.value = Math.max(zoomScale.value - 0.2, 0.6);
}

function onCanvasClick(event: MouseEvent) {
    if (isDrawing.value && store.selectedEntityId) {
        // Add point
         const container = document.querySelector('.image-wrapper'); 
         if (!container) return;
         
         const rect = container.getBoundingClientRect();
         // Coordinates are already handled correctly by getBoundingClientRect on scaled element
         const x = ((event.clientX - rect.left) / rect.width) * 100;
         const y = ((event.clientY - rect.top) / rect.height) * 100;
         
         const entity = store.selectedEntity;
         if (entity) {
             const newPoints = [...(entity.points || []), { x, y }];
             store.updateEntity(entity.id, { points: newPoints });
         }
    } else {
        store.selectedEntityId = null;
    }
}

function onFileChange(event: Event) {
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

function triggerUpload() {
  fileInput.value?.click();
}

function onDrop(event: DragEvent) {
  event.preventDefault();
  if (event.dataTransfer?.files && event.dataTransfer.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        store.setBaseImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(event.dataTransfer.files[0]);
  }
}

function onDragOver(event: DragEvent) {
  event.preventDefault();
}

const draggingKey = ref<number | null>(null);

function getPointsString(points?: {x: number, y: number}[]) {
    if (!points) return '';
    return points.map(p => `${p.x} ${p.y}`).join(',');
} 

function onPointMouseDown(index: number, event: MouseEvent) {
    event.stopPropagation();
    draggingKey.value = index;
    window.addEventListener('mousemove', onPointMouseMove);
    window.addEventListener('mouseup', onPointMouseUp);
}

function onPointMouseMove(event: MouseEvent) {
    if (draggingKey.value === null || !store.selectedEntity) return;

    const container = document.querySelector('.image-wrapper'); 
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    
    // Update specific point
    const points = [...(store.selectedEntity.points || [])];
    if (points[draggingKey.value]) {
        points[draggingKey.value] = { x, y };
        store.updateEntity(store.selectedEntity.id, { points });
    }
}

function onPointMouseUp() {
    draggingKey.value = null;
    window.removeEventListener('mousemove', onPointMouseMove);
    window.removeEventListener('mouseup', onPointMouseUp);
}
</script>

<template>
  <div class="canvas-area" @click.self="onCanvasClick" @drop.prevent="onDrop" @dragover.prevent="onDragOver">
    <!-- Empty State / Uploader -->

    <div 
        v-if="!hasImage" 
        class="upload-zone"
        @drop="onDrop"
        @dragover="onDragOver"
        @click="triggerUpload"
    >
      <div class="upload-content">
        <div class="icon">🖼️</div>
        <h3>Upload Floorplan</h3>
        <p>Drag & drop an image here, or click to select</p>
      </div>
      <input 
        ref="fileInput"
        type="file" 
        accept="image/*" 
        class="hidden-input"
        @change="onFileChange"
      >
    </div>

    <!-- Canvas -->
    <div v-else class="canvas-container">
       
       <div class="zoom-controls">
           <button class="zoom-btn" @click="zoomOut">-</button>
           <span class="zoom-level">{{ Math.round(zoomScale * 100) }}%</span>
           <button class="zoom-btn" @click="zoomIn">+</button>
       </div>

       <div class="scroll-frame">
           <div class="image-wrapper" 
                @click="onCanvasClick"
                :style="{ transform: `scale(${zoomScale})`, transformOrigin: 'top left' }"
           >
              <img :src="store.config.imageBase64" alt="Floorplan Base" draggable="false" />
              
              <svg class="overlay-layer" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <radialGradient 
                    v-for="entity in store.entities"
                    :key="'grad-' + entity.id"
                    :id="'grad-editor-' + entity.id"
                    gradientUnits="userSpaceOnUse"
                    :cx="entity.x"
                    :cy="entity.y"
                    :r="entity.style.gradientRadius"
                  >
                    <stop offset="0%" :stop-color="entity.style.onColor" :stop-opacity="entity.style.onOpacity" />
                    <stop offset="100%" :stop-color="entity.style.onColor" stop-opacity="0" />
                  </radialGradient>
                </defs>
                <polygon 
                    v-for="entity in store.entities"
                    :key="'poly-' + entity.id"
                    :points="getPointsString(entity.points)"
                    :fill="`url(#grad-editor-${entity.id})`"
                    :stroke="store.selectedEntityId === entity.id ? 'var(--color-primary)' : 'none'"
                    stroke-width="0.5"
                    style="pointer-events: none;"
                />
                 <!-- Vertex Handles -->
                <template v-for="entity in store.entities">
                    <circle
                        v-if="store.selectedEntityId === entity.id"
                        v-for="(point, index) in entity.points"
                        :key="'point-'+entity.id+'-'+index"
                        :cx="point.x"
                        :cy="point.y"
                        r="0.4"
                        fill="var(--color-primary)"
                        stroke="white"
                        stroke-width="0.1"
                        style="cursor: grab; pointer-events: auto;"
                        @mousedown="onPointMouseDown(index, $event)"
                        @click.stop
                    />
                </template>
              </svg>

              <!-- Entity Overlays -->
              <EntityOverlay 
                v-for="entity in store.entities" 
                :key="entity.id" 
                :entity="entity" 
              />
           </div>
       </div>
    </div>
  </div>
</template>

<style scoped>
.canvas-area {
  flex: 1;
  background-color: var(--color-bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Main area doesn't scroll, the container handles it */
  position: relative;
  padding: 2rem;
}

.upload-zone {
  width: 100%;
  max-width: 500px;
  height: 300px;
  border: 2px dashed var(--color-text-secondary);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s;
}

.upload-zone:hover {
  border-color: var(--color-primary);
  background: rgba(14, 165, 233, 0.05); /* primary with low opacity */
}

.upload-content {
  text-align: center;
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hidden-input {
  display: none;
}

.canvas-container {
  box-shadow: var(--shadow-xl);
  border-radius: var(--radius-sm);
  overflow: hidden; 
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.zoom-controls {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(4px);
    padding: 4px;
    border-radius: 4px;
    display: flex;
    gap: 8px;
    align-items: center;
    color: white;
}

.zoom-btn {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.3);
    color: white;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;
}

.zoom-btn:hover {
    background: rgba(255,255,255,0.2);
}

.scroll-frame {
    flex: 1;
    overflow: auto;
    position: relative;
    padding: 20px; /* space for scrolling */
}

.image-wrapper {
  position: relative;
  display: inline-block; /* shrink to image size */
  line-height: 0; /* remove gap */
  cursor: crosshair;
  transition: transform 0.2s ease;
}

.overlay-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.overlay-layer polygon {
    vector-effect: non-scaling-stroke;
}

.image-wrapper img {
  max-width: none; /* remove constraint so it can zoom */
  /* Remove max-height constraint to allow full zoom */
  display: block;
  user-select: none;
  width: 100%;
}
</style>
