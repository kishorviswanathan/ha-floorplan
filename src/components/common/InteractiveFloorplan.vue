<script setup lang="ts">
import type { FloorplanConfig, EntityState } from '../../types/floorplan';
import { computed } from 'vue';

const props = defineProps<{
    config: FloorplanConfig,
    entityStates: Record<string, EntityState>, 
}>();

const emit = defineEmits<{
  (e: 'entity-click', entityId: string, type: string): void
}>();

const hasImage = computed(() => !!props.config.imageBase64);

function onEntityClick(entity: any) {
  emit('entity-click', entity.entityId, entity.type);
}

function getEntityValues(entity: any) {
    const state = props.entityStates[entity.entityId] || { isOn: false };
    const { style } = entity;

    if (!state.isOn) {
        return {
            color: style.offColor,
            opacity: style.offOpacity
        };
    }

    let color = state.color || style.onColor;
    let opacity = style.onOpacity;

    if (state.brightness !== undefined) {
        // Map brightness 0-255 to 0-1, multiplied by the configured max opacity
        opacity = (state.brightness / 255) * style.onOpacity;
    }

    return { color, opacity };
}

function getEntityPositionStyle(entity: any) {
    const { style, x, y } = entity;
    return {
        left: `${x}%`,
        top: `${y}%`,
        width: `${style.width}%`,
        height: `${style.height}%`,
        transform: `translate(-50%, -50%) rotate(${style.rotation}deg)`,
        position: 'absolute' as const,
        zIndex: 1
    };
}

function getEntityVisualStyle(entity: any) {
    const { color, opacity } = getEntityValues(entity);
    const { shape } = entity;
    const state = props.entityStates[entity.entityId] || { isOn: false };
    
    // Ensure minimum visibility for low brightness if ON
    // If Opacity is 0.8, and brightness is 1/255, we want at least say 0.1 or 0.2
    let effectiveOpacity = opacity;
    if (state.isOn && state.brightness !== undefined) {
         // Map 0-255 brightness to range [0.3, style.onOpacity]
         const minOpacity = 0.3;
         const maxOpacity = entity.style.onOpacity;
         const brightnessFactor = state.brightness / 255;
         effectiveOpacity = minOpacity + (brightnessFactor * (maxOpacity - minOpacity));
    }

    return {
        width: '100%',
        height: '100%',
        backgroundColor: color,
        opacity: effectiveOpacity,
        borderRadius: shape === 'circle' ? '50%' : '4px',
        cursor: 'pointer',
        boxShadow: state.isOn ? `0 0 15px ${color}` : 'none',
        transition: 'all 0.3s ease'
    };
}

function getLabelStyle(entity: any) {
    const { offsetX, offsetY, color } = entity.labelConfig || {};
    return {
        transform: `translate(-50%, -50%) translate(${offsetX || 0}%, ${offsetY || 0}%)`,
        color: color || '#ffffff',
        pointerEvents: 'auto' as const,
        cursor: 'pointer' as const
    };
}

function getPointsString(points?: {x: number, y: number}[]) {
    if (!points) return '';
    return points.map(p => `${p.x} ${p.y}`).join(',');
}
</script>

<template>
  <div class="viewer-area">
    <div v-if="!hasImage" class="empty-state">
      <p>No floorplan loaded. Go to Editor to set up.</p>
    </div>

     <div v-else class="canvas-container">
       <div class="image-wrapper">
          <img :src="props.config.imageBase64" alt="Floorplan Base" draggable="false" />
          
          <svg class="overlay-layer" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient 
                v-for="entity in props.config.entities"
                :key="'grad-' + entity.id"
                :id="'grad-' + entity.id"
                gradientUnits="userSpaceOnUse"
                :cx="entity.x"
                :cy="entity.y"
                :r="entity.style.gradientRadius"
              >
                <stop offset="0%" :stop-color="getEntityValues(entity).color" :stop-opacity="Math.max(0.3, getEntityValues(entity).opacity)" />
                <stop offset="100%" :stop-color="getEntityValues(entity).color" stop-opacity="0" />
              </radialGradient>
            </defs>
            <polygon 
                v-for="entity in props.config.entities"
                :key="'poly-' + entity.id"
                :points="getPointsString(entity.points)"
                :fill="props.entityStates[entity.entityId]?.isOn ? `url(#grad-${entity.id})` : 'transparent'"
                stroke="none"
                style="pointer-events: none; transition: fill-opacity 0.3s ease;"
            />
          </svg>
          
          <div 
            v-for="entity in props.config.entities" 
            :key="entity.id"
            class="interactive-entity"
            :style="getEntityPositionStyle(entity)"
            @click="onEntityClick(entity)"
            :title="entity.label"
          >
             <div class="entity-shape" :style="getEntityVisualStyle(entity)"></div>
             <div 
                v-if="entity.labelConfig.show" 
                class="entity-label" 
                :style="getLabelStyle(entity)"
                @click.stop="onEntityClick(entity)"
             >
                {{ entity.label }}
             </div>
          </div>
       </div>
    </div>
  </div>
</template>

<style scoped>
/* Styles moved to parent component to ensure Shadow DOM injection in CE mode */
</style>
