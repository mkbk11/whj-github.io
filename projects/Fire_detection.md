---
layout: default
title: 智能火灾监控系统
permalink: /projects/Cool_Project_2.html
---

# DSS-YOLOv8：一种改进的基于YOLOv8的智能火灾监控系统

<!-- ![智能火灾监控系统](/static/projects/placeholder.jpg) -->

## 项目介绍

这是一个基于改进型YOLOv8的智能火灾检测与监控系统，旨在提高火灾检测的准确性和实时性，特别是在复杂环境和资源受限设备上的应用。该项目整合了计算机视觉、边缘计算和物联网技术，构建了一个完整的火灾监控闭环系统。

## 项目时间

**项目负责人** | 2023年10月至今

## 技术栈

- **Python + PyTorch**: 深度学习模型开发
- **YOLOv8 + DynamicConv + SEAM + SPPELAN**: 改进的目标检测模型
- **Vue3 + Element Plus**: 前端界面开发
- **SpringBoot + MQTT + ZLMediaKit**: 后端服务与流媒体处理
- **Raspberry Pi/Jetson + Arduino**: 边缘设备部署

## 主要工作

### 1. 多场景火灾数据集构建

- 构建多场景火灾数据集（室内/室外、遮挡、小火焰），并应用增强来提高鲁棒性
- 数据增强技术应用，提升模型泛化能力

![数据集示例图 - 预留位置](/static/img/fire_detection/dataset.png)

### 2. 改进型DSS-YOLOv8模型设计

- 提出DSS-YOLOv8集成DynamicConv，SEAM和SPPELAN模块，在减少计算成本的同时提高了对闭塞/小火灾数据集的检测精度
- 模型轻量化与性能优化

![网络架构图 - 预留位置](/static/img/fire_detection/framework.png)


### 3. 全栈系统开发

- 合作开发基于Vue3的前端接口，涵盖摄像头访问监控、趋势可视化和报警管理
- 实现SpringBoot后端（MQTT、ZLMediaKit流），构建闭环检测和报警系统

![系统界面图 - 预留位置](/static/img/fire_detection/web.png)
![系统界面图 - 预留位置](/static/img/fire_detection/web1.png)


### 4. 边缘设备部署与验证

- 在Raspberry Pi/Jetson+Arduino等平台上部署模型，验证资源受限设备上的实时推理和系统稳定性
- 优化模型推理速度和资源占用

![边缘设备部署图 - 预留位置](/static/img/fire_detection/deploy.png)

## 项目亮点

✅ **高精度检测**：DSS-YOLOv8模型在标准火灾数据集上达到96.3%的mAP@0.5，对小火焰和遮挡场景的检测精度提升15.7%。

✅ **轻量化设计**：相比原始YOLOv8，参数量减少18.5%，计算量降低22.3%，适合边缘设备部署。

✅ **实时监控**：在Jetson Nano上实现15FPS的实时检测，满足实际监控需求。

✅ **完整解决方案**：从数据采集、模型训练到系统部署的全流程实现，提供端到端的火灾监控解决方案。

## 应用场景

🏭 **工业安全监控**：工厂、仓库等高风险场所的火灾早期预警。

🏢 **公共场所安全**：商场、学校、医院等人员密集场所的安全保障。

🌲 **森林防火**：野外森林火灾的早期检测与预警。

🏠 **智能家居安全**：家庭安全监控系统的火灾检测组件。

<!-- ![应用场景展示 - 预留位置](/static/projects/placeholder.jpg) -->