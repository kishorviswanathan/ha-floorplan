<script setup lang="ts">
import { computed, ref } from 'vue';
import type { EntityConfig } from '../../types/floorplan';
import { useFloorplanStore } from '../../stores/floorplan';

const props = defineProps<{
  entity: EntityConfig
}>();

const store = useFloorplanStore();
const isSelected = computed(() => store.selectedEntityId === props.entity.id);

// Drag logic
const isDragging = ref(false);
const dragStart = ref({ x: 0, y: 0 });

const isLabelDragging = ref(false);
const labelDragStart = ref({ x: 0, y: 0 });

// We need to calculate % movement based on parent size. 
// Since we don't have easy access to parent ref here without inject/props, 
// we'll rely on event.target.offsetParent to get dimensions.

function onMouseDown(event: MouseEvent) {
  event.stopPropagation();
  store.selectedEntityId = props.entity.id;

  isDragging.value = true;
  dragStart.value = { x: event.clientX, y: event.clientY };

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
}

function onMouseMove(event: MouseEvent) {
  if (!isDragging.value) return;

  const dx = event.clientX - dragStart.value.x;
  const dy = event.clientY - dragStart.value.y;

  // Calculate percentage change
  // We need the container dimensions. 
  // We can get them from the store or DOM. 
  // Let's assume the entity's parent is the .image-wrapper
  const container = document.querySelector('.image-wrapper');
  if (!container) return;

  const rect = container.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;

  const dxPercent = (dx / width) * 100;
  const dyPercent = (dy / height) * 100;

  store.updateEntity(props.entity.id, {
    x: props.entity.x + dxPercent,
    y: props.entity.y + dyPercent
  });

  dragStart.value = { x: event.clientX, y: event.clientY };
}

function onMouseUp() {
  isDragging.value = false;
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', onMouseUp);
}

// Touch Logic
function onTouchStart(event: TouchEvent) {
  event.stopPropagation();
  // Prevent scrolling if we are starting a drag
  // event.preventDefault(); 

  store.selectedEntityId = props.entity.id;

  const touch = event.touches[0];
  if (!touch) return;

  isDragging.value = true;
  dragStart.value = { x: touch.clientX, y: touch.clientY };

  window.addEventListener('touchmove', onTouchMove, { passive: false });
  window.addEventListener('touchend', onTouchEnd);
}

function onTouchMove(event: TouchEvent) {
  if (!isDragging.value) return;
  event.preventDefault(); // Stop scrolling

  const touch = event.touches[0];
  if (!touch) return;

  const dx = touch.clientX - dragStart.value.x;
  const dy = touch.clientY - dragStart.value.y;

  const container = document.querySelector('.image-wrapper');
  if (!container) return;

  const rect = container.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;

  const dxPercent = (dx / width) * 100;
  const dyPercent = (dy / height) * 100;

  store.updateEntity(props.entity.id, {
    x: props.entity.x + dxPercent,
    y: props.entity.y + dyPercent
  });

  dragStart.value = { x: touch.clientX, y: touch.clientY };
}

function onTouchEnd() {
  isDragging.value = false;
  window.removeEventListener('touchmove', onTouchMove);
  window.removeEventListener('touchend', onTouchEnd);
}




// Label Drag Logic
const labelRef = ref<HTMLElement | null>(null);

function onLabelMouseDown(event: MouseEvent) {
  event.stopPropagation(); // Don't drag entity
  store.selectedEntityId = props.entity.id;
  isLabelDragging.value = true;
  labelDragStart.value = { x: event.clientX, y: event.clientY };
  window.addEventListener('mousemove', onLabelMouseMove);
  window.addEventListener('mouseup', onLabelMouseUp);
}

function onLabelMouseMove(event: MouseEvent) {
  if (!isLabelDragging.value || !labelRef.value) return;

  const dx = event.clientX - labelDragStart.value.x;
  const dy = event.clientY - labelDragStart.value.y;

  // Calculate percentage change based on LABEL dimensions
  const rect = labelRef.value.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;

  if (width === 0 || height === 0) return;

  const dxPercent = (dx / width) * 100;
  const dyPercent = (dy / height) * 100;

  // Update labelConfig offset
  const currentConfig = props.entity.labelConfig;
  store.updateEntity(props.entity.id, {
    labelConfig: {
      ...currentConfig,
      offsetX: (currentConfig.offsetX || 0) + dxPercent,
      offsetY: (currentConfig.offsetY || 0) + dyPercent
    }
  });

  labelDragStart.value = { x: event.clientX, y: event.clientY };
}

function onLabelMouseUp() {
  isLabelDragging.value = false;
  window.removeEventListener('mousemove', onLabelMouseMove);
  window.removeEventListener('mouseup', onLabelMouseUp);
}

function onLabelTouchStart(event: TouchEvent) {
  event.stopPropagation();
  store.selectedEntityId = props.entity.id;
  const touch = event.touches[0];
  if (!touch) return;

  isLabelDragging.value = true;
  labelDragStart.value = { x: touch.clientX, y: touch.clientY };
  window.addEventListener('touchmove', onLabelTouchMove, { passive: false });
  window.addEventListener('touchend', onLabelTouchEnd);
}

function onLabelTouchMove(event: TouchEvent) {
  if (!isLabelDragging.value || !labelRef.value) return;
  event.preventDefault();
  const touch = event.touches[0];
  if (!touch) return;

  const dx = touch.clientX - labelDragStart.value.x;
  const dy = touch.clientY - labelDragStart.value.y;

  const rect = labelRef.value.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;

  if (width === 0 || height === 0) return;

  const dxPercent = (dx / width) * 100;
  const dyPercent = (dy / height) * 100;

  const currentConfig = props.entity.labelConfig;
  store.updateEntity(props.entity.id, {
    labelConfig: {
      ...currentConfig,
      offsetX: (currentConfig.offsetX || 0) + dxPercent,
      offsetY: (currentConfig.offsetY || 0) + dyPercent
    }
  });

  labelDragStart.value = { x: touch.clientX, y: touch.clientY };
}

function onLabelTouchEnd() {
  isLabelDragging.value = false;
  window.removeEventListener('touchmove', onLabelTouchMove);
  window.removeEventListener('touchend', onLabelTouchEnd);
}

// Style computation
const styleObject = computed(() => {
  const { shape, style, x, y } = props.entity;

  // Safely access offColor from union type
  let backgroundColor = '#94a3b8'; // default
  const colors = style.colors;
  if (colors && 'offColor' in colors) {
    backgroundColor = colors.offColor;
  }

  const baseStyle: Record<string, any> = {
    left: `${x}%`,
    top: `${y}%`,
    width: `${style.width}%`,
    height: `${style.height}%`,
    backgroundColor,
    opacity: style.offOpacity,
    transform: `translate(-50%, -50%) rotate(${style.rotation}deg)`,
    position: 'absolute' as const,
    border: isSelected.value ? '2px solid var(--color-primary)' : '2px solid transparent',
    borderRadius: shape === 'circle' ? '50%' : '4px', // default for square/rect
    cursor: 'move',
    zIndex: isSelected.value ? 10 : 1
  };

  if (shape === 'square') {
    // For square we might want aspect ratio lock, but here w/h are % of parent.
    // If we want a true square, it's tricky with % unless parent is square.
    // We will stick to w/h percentages for now.
  }

  return baseStyle;
});

const labelStyle = computed(() => {
  const { offsetX, offsetY, color } = props.entity.labelConfig || {};
  return {
    transform: `translate(-50%, -50%) translate(${offsetX || 0}%, ${offsetY || 0}%)`,
    color: color || '#ffffff',
  };
});

</script>

<template>
  <div ref="overlayRef" class="entity-overlay" :style="styleObject" @mousedown="onMouseDown" @touchstart="onTouchStart"
    @click.stop>
    <!-- Optional: Label inside or tooltip? -->
    <div v-if="entity.labelConfig.show" ref="labelRef" class="entity-label" :style="labelStyle"
      @mousedown="onLabelMouseDown" @touchstart="onLabelTouchStart" @click.stop>
      {{ entity.label }}
    </div>
  </div>
</template>

<style scoped>
.entity-overlay {
  box-sizing: border-box;
  transition: border-color 0.2s;
}

.entity-label {
  position: absolute;
  top: 50%;
  left: 50%;
  /* transform handled incorrectly inline */
  background: rgba(0, 0, 0, 0.7);
  padding: 2px 4px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: auto;
  cursor: grab;
  line-height: 1.2;
}

.entity-label:active {
  cursor: grabbing;
}
</style>
