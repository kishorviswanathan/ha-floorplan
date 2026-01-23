<script setup lang="ts">
import { computed, ref } from 'vue';
import InteractiveFloorplan from './components/common/InteractiveFloorplan.vue';
import type { FloorplanConfig, EntityState } from './types/floorplan';

const props = defineProps<{
    config?: FloorplanConfig | string,
    hass?: any
}>();

const cardRef = ref<HTMLElement | null>(null);

const parsedConfig = computed((): FloorplanConfig | null => {
    if (!props.config) return null;
    let conf: FloorplanConfig | null = null;
    if (typeof props.config === 'string') {
        try {
            conf = JSON.parse(props.config);
        } catch (e) {
            console.error('Failed to parse floorplan config', e);
            return null;
        }
    } else {
        conf = props.config as FloorplanConfig;
    }

    // Ensure imageBase64 is clean (strip newlines/spaces from YAML folding)
    if (conf && conf.imageBase64) {
        return {
            ...conf,
            imageBase64: conf.imageBase64.replace(/\s/g, '')
        };
    }
    return conf;
});


// Computed state map based on HASS entities
const entityStates = computed(() => {
    const states: Record<string, EntityState> = {};
    if (!parsedConfig.value || !props.hass) return states;

    parsedConfig.value.entities?.forEach((entity: any) => {
        const haState = props.hass.states[entity.entityId];
        if (haState) {
            let state = haState.state;
            let color: string | undefined = undefined;
            let brightness: number | undefined = undefined;

            if (entity.type === 'light') {
                // Extract attributes for lights
                if (state == 'on') {
                    if (haState.attributes.rgb_color) {
                        color = `rgb(${haState.attributes.rgb_color.join(',')})`;
                    }
                    if (haState.attributes.brightness !== undefined) {
                        brightness = haState.attributes.brightness;
                    }
                }
                const shouldLightUp = state === 'on';
                states[entity.entityId] = { state, color, brightness, shouldLightUp };
            } else if (entity.type === 'media_player') {
                const shouldLightUp = ['on', 'playing'].includes(state);
                states[entity.entityId] = { state, shouldLightUp };
            } else if (entity.type === 'camera') {
                const shouldLightUp = ['on', 'recording', 'streaming'].includes(state);
                states[entity.entityId] = { state, shouldLightUp };
            } else {
                states[entity.entityId] = { state };
            }
        } else {
            states[entity.entityId] = { state: 'off' };
        }
    });
    return states;
});

function handleEntityClick(entityId: string, type: string) {
    if (!props.hass) return;

    if (type === 'light') {
        props.hass.callService('light', 'toggle', {
            entity_id: entityId
        });
    } else if (type === 'media_player') {
        props.hass.callService('media_player', 'toggle', {
            entity_id: entityId
        });
    } else if (type === 'camera') {
        // Not all cameras support turn_on/turn_off
        const service = entityStates.value[entityId]?.state == 'idle' ? 'turn_on' : 'turn_off';
        props.hass.callService('homeassistant', service, {
            entity_id: entityId
        });
    } else {
        // Default toggle
        props.hass.callService('homeassistant', 'toggle', {
            entity_id: entityId
        });
    }
}

function handleEntityLongPress(entityId: string) {
    const event = new CustomEvent('hass-more-info', {
        detail: { entityId },
        bubbles: true,
        composed: true,
    });
    if (cardRef.value) {
        cardRef.value.dispatchEvent(event);
    }
}



console.info(`%c HA Floorplan Card %c ${__APP_VERSION__} `, 'background: #333; color: #fff', 'background: #0ea5e9; color: #fff');
</script>

<template>
    <ha-card ref="cardRef" class="ha-card-wrapper" v-if="parsedConfig">
        <InteractiveFloorplan :config="parsedConfig" :entity-states="entityStates" @entity-click="handleEntityClick"
            @entity-long-press="handleEntityLongPress" />
    </ha-card>
    <div v-else class="error">
        No Configuration Loaded
    </div>
</template>

<style>
/* Basic reset for the shadow DOM */
:host {
    display: block !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box !important;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

ha-card {
    display: block !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    background: none !important;
    /* Let the floorplan be the background or transparent */
    box-shadow: none !important;
    border: none !important;
}

.ha-card-wrapper {
    width: 100% !important;
    display: block !important;
    padding: 0 !important;
    margin: 0 !important;
}

/* Styles migrated from InteractiveFloorplan.vue for CE compatibility */
.viewer-area {
    flex: 1;
    background-color: transparent;
    display: block;
    position: relative;
    padding: 0 !important;
    margin: 0 !important;
    height: auto;
    width: 100% !important;
}

.empty-state {
    color: var(--color-text-secondary);
    font-size: 1.2rem;
    padding: 20px;
    text-align: center;
}

.canvas-container {
    /* box-shadow removed for card mode */
    border-radius: 0;
    overflow: hidden;
    position: relative;
    max-width: 100%;
    max-height: 100%;
}

.image-wrapper {
    position: relative;
    display: block;
    width: 100%;
    line-height: 0;
    container-type: inline-size;
}

.image-wrapper img {
    width: 100%;
    height: auto;
    display: block;
}

.entity-label {
    position: absolute;
    top: 50%;
    left: 50%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 2px 4px;
    font-size: 14px;
    /* Fallback */
    font-size: 1.5cqw;
    border-radius: 4px;
    white-space: nowrap;
    pointer-events: none;
    line-height: 1.2;
}

.overlay-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
}

.overlay-layer polygon {
    vector-effect: non-scaling-stroke;
}

.interactive-entity {
    z-index: 10;
}

.error {
    padding: 20px;
    color: red;
}

/* Blinking animation for camera recording state */
@keyframes camera-recording-blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.3;
    }
}

.camera-recording {
    animation: camera-recording-blink 2s ease-in-out infinite;
}
</style>
