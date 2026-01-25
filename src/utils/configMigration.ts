/**
 * Configuration Migration Utility
 * 
 * This file contains migration logic for handling older YAML configurations
 * with the previous color property structure. It can be removed once all users
 * have migrated to the new format.
 * 
 * Migration rules:
 * - Only migrate if new 'colors' property is missing
 * - For non-camera entities: onColor, offColor -> colors: {onColor, offColor}
 * - For camera entities: cameraIdleColor, etc. -> colors: {idleColor, recordingColor, streamingColor}
 */

import type { FloorplanConfig } from '../types/floorplan';

/**
 * Migrates an individual entity's color properties from old to new format
 * @param entity The entity configuration to migrate
 * @returns The migrated entity (modifies in place and returns)
 */
function migrateEntityColors(entity: any): any {
    // Skip if entity already has the new colors structure
    if (entity.style?.colors) {
        return entity;
    }

    // Skip if no style object
    if (!entity.style) {
        return entity;
    }

    const style = entity.style;

    // Check if entity is a camera type
    if (entity.type === 'camera') {
        // Migrate camera-specific colors if old properties exist
        if (style.cameraIdleColor || style.cameraRecordingColor || style.cameraStreamingColor) {
            style.colors = {
                idleColor: style.cameraIdleColor || '#6b7280',
                recordingColor: style.cameraRecordingColor || '#ef4444',
                streamingColor: style.cameraStreamingColor || '#3b82f6'
            };

            // Remove old properties
            delete style.cameraIdleColor;
            delete style.cameraRecordingColor;
            delete style.cameraStreamingColor;
        }
    } else {
        // Migrate binary colors (on/off) if old properties exist
        if (style.onColor || style.offColor) {
            style.colors = {
                onColor: style.onColor || '#facc15',
                offColor: style.offColor || '#94a3b8'
            };

            // Remove old properties
            delete style.onColor;
            delete style.offColor;
        }
    }

    return entity;
}

/**
 * Migrates a full configuration from old to new format
 * @param config The floorplan configuration to migrate
 * @returns The migrated configuration
 */
export function migrateConfig(config: any): FloorplanConfig {
    // Ensure entities array exists
    if (!config.entities || !Array.isArray(config.entities)) {
        return config as FloorplanConfig;
    }

    // Migrate each entity
    config.entities = config.entities.map((entity: any) => migrateEntityColors(entity));

    return config as FloorplanConfig;
}

/**
 * Checks if a configuration needs migration
 * @param config The configuration to check
 * @returns True if migration is needed
 */
export function needsMigration(config: any): boolean {
    if (!config.entities || !Array.isArray(config.entities)) {
        return false;
    }

    return config.entities.some((entity: any) => {
        if (!entity.style) return false;

        // Check if has old properties but no new colors property
        const hasOldBinaryColors = Boolean(entity.style.onColor || entity.style.offColor);
        const hasOldCameraColors = Boolean(
            entity.style.cameraIdleColor ||
            entity.style.cameraRecordingColor ||
            entity.style.cameraStreamingColor
        );
        const hasNewColors = Boolean(entity.style.colors);

        return (hasOldBinaryColors || hasOldCameraColors) && !hasNewColors;
    });
}
