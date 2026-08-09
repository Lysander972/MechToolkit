# Shader 材质属性

## 本篇范围

- Shader 材质属性名、类型与范围的速查表
- 常用属性分类

## 不包含

- 具体 API 调用方式（查 SDK 的 `G.effect.*` / `G.material.*`）
- Shader 原理或渲染管线细节

## 用途

这些属性用于在脚本中动态修改机械的材质外观（颜色、贴图、透明度、特效参数等）。

## 使用方式

通过 `G.effect.*` / `G.material.*` 系列 API 设置，具体调用签名查 SDK 的 `temp/toolkit/bescript_reference/sdk.ts` 中对应函数声明。

## 常用属性速查

- **颜色类**（`_PaintColor`、`_Color`、`_TintColor`）：最常用于动态换色、阵营区分
- **透明度类**（`_Cutoff`、透明度相关）：用于渐隐/渐显效果
- **贴图类**（`_MainTex` 等）：用于运行时换皮

属性名区分大小写。

| Shader | 类型 | 属性名 | 范围 |
|--------|------|--------|------|
| Shader Graphs/AutoRot | 贴图 | `_MainTex` | - |
| Shader Graphs/AutoRot | 贴图 | `_MetallicGlossMap` | - |
| Shader Graphs/AutoRot | 贴图 | `_BumpMap` | - |
| Shader Graphs/AutoRot | 颜色 | `_PaintColor` | - |
| Shader Graphs/AutoRot | 小数 | `_Emmisive` | `[0~1]` |
| Shader Graphs/AutoRot | 向量 | `_Rotate` | - |
| Shader Graphs/BreathLight | 颜色 | `_Color` | - |
| Shader Graphs/BreathLight | 小数 | `_Speed` | `[0~1]` |
| Shader Graphs/BreathLight | 小数 | `_Rate` | `[0~1]` |
| Shader Graphs/BreathLight | 向量 | `_Range` | - |
| Shader Graphs/Cloth | 贴图 | `_MainTex` | - |
| Shader Graphs/Cloth | 贴图 | `_MetallicGlossMap` | - |
| Shader Graphs/Cloth | 贴图 | `_BumpMap` | - |
| Shader Graphs/Cloth | 小数 | `_WaveSpeed2` | `[0~1]` |
| Shader Graphs/Cloth | 小数 | `_WaveSpeed` | `[0~1]` |
| Shader Graphs/Cloth | 小数 | `_NormalTwist` | `[0~1]` |
| Shader Graphs/Cloth | 向量 | `_WindDir` | - |
| Shader Graphs/ColorPBR | 颜色 | `_Color` | - |
| Shader Graphs/ColorPBR | 小数 | `_Metallic` | `[0~1]` |
| Shader Graphs/ColorPBR | 小数 | `_Glossiness` | `[0~1]` |
| Shader Graphs/ColorPBR | 小数 | `_Emmit` | `[0~1]` |
| Shader Graphs/Device emmit | 贴图 | `_MainTex` | - |
| Shader Graphs/Device emmit | 贴图 | `_MetallicGlossMap` | - |
| Shader Graphs/Device emmit | 贴图 | `_BumpMap` | - |
| Shader Graphs/Device emmit | 贴图 | `_EmissionMap` | - |
| Shader Graphs/Device emmit | 颜色 | `_PaintColor` | - |
| Shader Graphs/Device emmit | 颜色 | `_EmmitColor` | - |
| Shader Graphs/Device Transparent | 贴图 | `_MainTex` | - |
| Shader Graphs/Device Transparent | 贴图 | `_MetallicGlossMap` | - |
| Shader Graphs/Device Transparent | 贴图 | `_BumpMap` | - |
| Shader Graphs/Device Transparent | 颜色 | `_PaintColor` | - |
| Shader Graphs/Device Transparent | 向量 | `_Tiling` | - |
| Shader Graphs/DeviceAlphaTest | 贴图 | `_MainTex` | - |
| Shader Graphs/DeviceAlphaTest | 贴图 | `_MetallicGlossMap` | - |
| Shader Graphs/DeviceAlphaTest | 贴图 | `_BumpMap` | - |
| Shader Graphs/DeviceAlphaTest | 颜色 | `_EmmitColor` | - |
| Shader Graphs/DeviceAlphaTest | 颜色 | `_Color` | - |
| Shader Graphs/DeviceAlphaTest | 小数 | `_AlphaClip` | `[0~1]` |
| Shader Graphs/DeviceDissolve | 贴图 | `_MainTex` | - |
| Shader Graphs/DeviceDissolve | 贴图 | `_MetallicGlossMap` | - |
| Shader Graphs/DeviceDissolve | 贴图 | `_BumpMap` | - |
| Shader Graphs/DeviceDissolve | 颜色 | `_PaintColor` | - |
| Shader Graphs/DeviceDissolve | 颜色 | `_DissoveColor` | - |
| Shader Graphs/DeviceDissolve | 小数 | `_AlphaClip` | `[0~1]` |
| Shader Graphs/DeviceDissolve | 小数 | `_DissoveScale` | `[0~1]` |
| Shader Graphs/DeviceDissolve | 小数 | `_DissoveRange` | `[0~0.5]` |
| Shader Graphs/Diffuse | 贴图 | `_EmissionMap` | - |
| Shader Graphs/Diffuse | 贴图 | `_MainTex` | - |
| Shader Graphs/Diffuse | 颜色 | `_EmmitColor` | - |
| Shader Graphs/Diffuse | 小数 | `_Metallic` | `[0~1]` |
| Shader Graphs/Diffuse | 小数 | `_Smoothness` | `[0~1]` |
| Shader Graphs/Emmit | 颜色 | `_EmmitColor` | - |
| Shader Graphs/Emmit | 小数 | `_Repeat` | `[0~1]` |
| Shader Graphs/EnergyShield | 贴图 | `_MainTex` | - |
| Shader Graphs/EnergyShield | 贴图 | `_TwirlTex` | - |
| Shader Graphs/EnergyShield | 颜色 | `_Color` | - |
| Shader Graphs/EnergyShield | 颜色 | `_LineColor` | - |
| Shader Graphs/EnergyShield | 颜色 | `_GlassColor` | - |
| Shader Graphs/EnergyShield | 小数 | `_offset` | `[0~1]` |
| Shader Graphs/EnergyShield | 小数 | `_s1` | `[0~1]` |
| Shader Graphs/EnergyShield | 小数 | `_s2` | `[0~1]` |
| Shader Graphs/EnergyShield | 小数 | `_fresnel` | `[0~1]` |
| Shader Graphs/EnergyShield | 小数 | `_HitTime` | `[0~1]` |
| Shader Graphs/EnergyShield | 向量 | `_HitPos` | - |
| Shader Graphs/EnergyShield | 向量 | `_HitTiling` | - |
| Shader Graphs/EnergyShield | 向量 | `_HitOffset` | - |
| Shader Graphs/ForceField | 颜色 | `_BaseColor` | - |
| Shader Graphs/ForceField | 小数 | `_Power` | `[0~1]` |
| Shader Graphs/ForceField | 小数 | `_Rate` | `[0~1]` |
| Shader Graphs/ForceField | 小数 | `_TimeFactor` | `[0~1]` |
| Shader Graphs/ForceField | 小数 | `_CellDensity` | `[0~1]` |
| Shader Graphs/Glass | 颜色 | `_Color` | - |
| Shader Graphs/Glass | 小数 | `Metallic` | `[0~1]` |
| Shader Graphs/Glass | 小数 | `_Glossiness` | `[0~1]` |
| Shader Graphs/GlassFresnel | 贴图 | `_MainTex` | - |
| Shader Graphs/GlassFresnel | 贴图 | `_MetallicGlossMap` | - |
| Shader Graphs/GlassFresnel | 贴图 | `_BumpMap` | - |
| Shader Graphs/GlassFresnel | 小数 | `_Bright` | `[0~1]` |
| Shader Graphs/GlassFresnel | 小数 | `_NormalRate` | `[0~1]` |
| Shader Graphs/Hologram | 贴图 | `_HologramTex` | - |
| Shader Graphs/Hologram | 贴图 | `_MainTex` | - |
| Shader Graphs/Hologram | 颜色 | `_BaseColor` | - |
| Shader Graphs/Hologram | 颜色 | `_FresnelColor` | - |
| Shader Graphs/Hologram | 小数 | `_FresnelPower` | `[0~10]` |
| Shader Graphs/Hologram | 小数 | `_FlashRnd` | `[0~1]` |
| Shader Graphs/Hologram | 小数 | `_FlashRate` | `[0~1]` |
| Shader Graphs/Hologram | 小数 | `_Shake` | `[0~1]` |
| Shader Graphs/Hologram | 小数 | `_RotateSpeed` | `[0~1]` |
| Shader Graphs/Hologram | 向量 | `_Rotate` | - |
| Shader Graphs/Hologram | 向量 | `_HologramTexTiling` | - |
| Shader Graphs/Hologram | 向量 | `_ScrollSpeed` | - |
| Shader Graphs/Hologram | 向量 | `_UVScroll` | - |
| Shader Graphs/LCD | 贴图 | `_MainTex` | - |
| Shader Graphs/LCD | 贴图 | `_DiodeBorderTexture` | - |
| Shader Graphs/LCD | 贴图 | `_DiodeTexture` | - |
| Shader Graphs/LCD | 贴图 | `_ScanlineTexture` | - |
| Shader Graphs/LCD | 颜色 | `_EmissiveTint` | - |
| Shader Graphs/LCD | 小数 | `_ScreenBrightnessFlickerOffsetSpeed` | `[0~1]` |
| Shader Graphs/LCD | 小数 | `_ScreenBrightnessFlickerIntensity` | `[0~1]` |
| Shader Graphs/LCD | 小数 | `_DiodeBorderFadeDistance` | `[0~1]` |
| Shader Graphs/LCD | 小数 | `_DiodeFadeDistance` | `[0~1]` |
| Shader Graphs/LCD | 小数 | `_DiodeBrightnessMultiplier` | `[0~10]` |
| Shader Graphs/LCD | 小数 | `_ScanlineFadeDistance` | `[0~1]` |
| Shader Graphs/LCD | 小数 | `_ScanlineSpeed` | `[0~1]` |
| Shader Graphs/LCD | 小数 | `_ScanlineTiling` | `[0~1]` |
| Shader Graphs/LCD | 小数 | `_ScanlineIntensity` | `[0~1]` |
| Shader Graphs/LCD | 小数 | `_MicroNoiseIntensity` | `[0~1]` |
| Shader Graphs/LCD | 小数 | `_MicroNoiseFadeDistance` | `[0~1]` |
| Shader Graphs/LCD | 小数 | `_ViewingAngleQuality` | `[0~1]` |
| Shader Graphs/LCD | 小数 | `_ChromaLoss` | `[0~1]` |
| Shader Graphs/LCD | 小数 | `_BrightnessLoss` | `[0~1]` |
| Shader Graphs/LCD | 小数 | `_HueShift` | `[0~1]` |
| Shader Graphs/LCD | 向量 | `_DiodeTiling` | - |
| Shader Graphs/LCD | 向量 | `_MicroNoiseTiling` | - |
| Shader Graphs/Liquid | 颜色 | `_Color` | - |
| Shader Graphs/Liquid | 颜色 | `_TopColor` | - |
| Shader Graphs/Liquid | 小数 | `_Fill` | `[0~1]` |
| Shader Graphs/Liquid | 小数 | `_WobbleZ` | `[0~1]` |
| Shader Graphs/Liquid | 小数 | `_WobbleX` | `[0~1]` |
| Shader Graphs/Liquid | 小数 | `_twirl` | `[0~1]` |
| Shader Graphs/Liquid | 小数 | `_twirlTop` | `[0~1]` |
| Shader Graphs/Metallic | 贴图 | `_MainTex` | - |
| Shader Graphs/Metallic | 贴图 | `_MetallicGlossMap` | - |
| Shader Graphs/Metallic | 贴图 | `_BumpMap` | - |
| Shader Graphs/Metallic | 颜色 | `_EmmitColor` | - |
| Shader Graphs/Metallic | 颜色 | `_Color` | - |
| Shader Graphs/Metallic | 向量 | `_Tiling` | - |
| Shader Graphs/Outline | 颜色 | `_Color` | - |
| Shader Graphs/Outline | 小数 | `_Scale` | `[0~1]` |
| Shader Graphs/Outline | 向量 | `_offset` | - |
| Shader Graphs/Overall | 颜色 | `_Color` | - |
| Shader Graphs/Overall | 小数 | `_offset` | `[0~1]` |
| Shader Graphs/Overall | 小数 | `_fresnel` | `[0~1]` |
| Shader Graphs/Paint1 | 贴图 | `_MetallicGlossMap` | - |
| Shader Graphs/Paint1 | 贴图 | `_MainTex` | - |
| Shader Graphs/Paint1 | 贴图 | `_BumpMap` | - |
| Shader Graphs/Paint1 | 颜色 | `_PaintColor2` | - |
| Shader Graphs/Paint1 | 颜色 | `_PaintColor3` | - |
| Shader Graphs/Paint2 | 贴图 | `_MainTex` | - |
| Shader Graphs/Paint2 | 贴图 | `_BumpMap` | - |
| Shader Graphs/Paint2 | 颜色 | `_PaintColor` | - |
| Shader Graphs/Paint2 | 颜色 | `_PaintColor2` | - |
| Shader Graphs/Paint2 | 颜色 | `_PaintColor3` | - |
| Shader Graphs/Paint2 | 颜色 | `_ScratchColor` | - |
| Shader Graphs/Paint2 | 颜色 | `_EmmitColor` | - |
| Shader Graphs/Paint2 | 小数 | `_Scratch` | `[0~10]` |
| Shader Graphs/Paint2 | 向量 | `_Metal` | - |
| Shader Graphs/Paint3 | 贴图 | `_MetallicGlossMap` | - |
| Shader Graphs/Paint3 | 贴图 | `_BumpMap` | - |
| Shader Graphs/Paint3 | 颜色 | `_PaintColor` | - |
| Shader Graphs/Paint3 | 颜色 | `_PaintColor2` | - |
| Shader Graphs/Paint3 | 颜色 | `_PaintColor3` | - |
| Shader Graphs/Paint3 | 颜色 | `_EmmitColor` | - |
| Shader Graphs/Paint3 | 向量 | `_Metal` | - |
| Shader Graphs/ParticleMesh | 贴图 | `_MainTex` | - |
| Shader Graphs/ParticleMesh | 贴图 | `_MetallicGlossMap` | - |
| Shader Graphs/ParticleMesh | 贴图 | `_BumpMap` | - |
| Shader Graphs/RepeatEmmit | 贴图 | `_MainTex` | - |
| Shader Graphs/RepeatEmmit | 颜色 | `_EmmitColor` | - |
| Shader Graphs/RepeatEmmit | 小数 | `_Repeat` | `[0~1]` |
| Shader Graphs/RepeatEmmit | 向量 | `_Rotate` | - |
| Shader Graphs/RimLight | 贴图 | `_BumpMap` | - |
| Shader Graphs/RimLight | 贴图 | `_MetallicGlossMap` | - |
| Shader Graphs/RimLight | 贴图 | `_MainTex` | - |
| Shader Graphs/RimLight | 颜色 | `_PaintColor` | - |
| Shader Graphs/RimLight | 颜色 | `_BaseColor` | - |
| Shader Graphs/RimLight | 小数 | `_Power` | `[0~30]` |
| Shader Graphs/RimLight | 小数 | `_Rate` | `[0~1]` |
| Shader Graphs/S_WaterFall | 贴图 | `FoamMask` | - |
| Shader Graphs/S_WaterFall | 颜色 | `_Color` | - |
| Shader Graphs/S_WaterFall | 小数 | `_WindSize` | `[0~1]` |
| Shader Graphs/S_WaterFall | 小数 | `_WavePower` | `[0~1]` |
| Shader Graphs/S_WaterFall | 小数 | `_FoamStep` | `[0~1]` |
| Shader Graphs/S_WaterFall | 小数 | `_WaterFallSpeed` | `[0~1]` |
| Shader Graphs/S_WaterFall | 小数 | `_WaterFallPower` | `[0~1]` |
| Shader Graphs/S_WaterFall | 向量 | `_WaveDirection` | - |
| Shader Graphs/S_WaterFall | 向量 | `_WaterFallTiling` | - |
| Shader Graphs/Shield | 贴图 | `_MainTex` | - |
| Shader Graphs/Shield | 颜色 | `_FrontColor` | - |
| Shader Graphs/Shield | 颜色 | `_BackColor` | - |
| Shader Graphs/Shield | 颜色 | `_FresnelColor` | - |
| Shader Graphs/Shield | 小数 | `_FresnelPower` | `[0~5]` |
| Shader Graphs/Shield | 小数 | `_VertexFrequency` | `[0~20]` |
| Shader Graphs/Shield | 小数 | `_VertexAmount` | `[0~1]` |
| Shader Graphs/TransparentPBR | 颜色 | `_BaseColor` | - |
| Shader Graphs/TransparentPBR | 小数 | `_Metallic` | `[0~1]` |
| Shader Graphs/TransparentPBR | 小数 | `_Glossiness` | `[0~1]` |
| Shader Graphs/TransparentPBR | 小数 | `_Emmit` | `[0~1]` |
| Shader Graphs/UnLit | 贴图 | `_MainTex` | - |
| Shader Graphs/WetSnow | 贴图 | `_MainTex` | - |
| Shader Graphs/WetSnow | 贴图 | `_BumpMap` | - |
| Shader Graphs/WetSnow | 贴图 | `_MetallicGlossMap` | - |
| Shader Graphs/WetSnow | 小数 | `_Wetness` | `[0~1]` |
| Shader Graphs/WetSnow | 小数 | `_WaterHeight` | `[0~1]` |
| Shader Graphs/WetSnow | 小数 | `_Mirror` | `[0~1]` |
| Shader Graphs/WetSnow | 小数 | `_MIrrorNormal` | `[0~1]` |
| Shader Graphs/WetSnow | 向量 | `_Scale` | - |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_EnableHeightBlend` | `0/1` |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_HeightTransition` | `[0~60]` |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_NumLayersCount` | - |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_Control` | - |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_Splat3` | - |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_Splat2` | - |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_Splat1` | - |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_Splat0` | - |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_Normal3` | - |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_Normal2` | - |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_Normal1` | - |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_Normal0` | - |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_Mask3` | - |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_Mask2` | - |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_Mask1` | - |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_Mask0` | - |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_Metallic0` | `[0~1]` |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_Metallic1` | `[0~1]` |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_Metallic2` | `[0~1]` |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_Metallic3` | `[0~1]` |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_Smoothness0` | `[0~1]` |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_Smoothness1` | `[0~1]` |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_Smoothness2` | `[0~1]` |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_Smoothness3` | `[0~1]` |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_MainTex` | - |
| InTerra/URP/Terrain (Lit with Features) | 颜色 | `_BaseColor` | - |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_TriplanarTex` | - |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_Triplanar_MetallicAO` | - |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_TerrainHolesTexture` | - |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_EnableInstancedPerPixelNormal` | `0/1` |
| InTerra/URP/Terrain (Lit with Features) | 向量 | `_HT_distance` | - |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_HT_distance_scale` | `[0~0.5]` |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_HT_cover` | `[0~1]` |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_Distance_HeightTransition` | `[0~60]` |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_TriplanarSharpness` | `[4~10]` |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_ParallaxAffineStepsTerrain` | - |
| InTerra/URP/Terrain (Lit with Features) | 向量 | `_MipMapFade` | - |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_MipMapLevel` | - |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_TriplanarOneToAllSteep` | - |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_TerrainColorTintTexture` | - |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_TerrainColorTintStrenght` | `[0~1]` |
| InTerra/URP/Terrain (Lit with Features) | 贴图 | `_TerrainNormalTintTexture` | - |
| InTerra/URP/Terrain (Lit with Features) | 小数 | `_TerrainNormalTintStrenght` | `[0~1]` |

## 相关文档

- `effect-skill-design.md`（技能与特效设计）
- `performance-optimization.md`（特效性能注意事项）
| InTerra/URP/Terrain (Lit with Features) | 向量 | `_TerrainNormalTintDistance` | - |
| InTerra/URP/Terrain (Lit with Features) | 向量 | `_TerrainSizeXZPosY` | - |
