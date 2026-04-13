---
layout: default
title: 智能火灾监控系统
permalink: /projects/Fire_detection.html
---

# 图片插入需加入 {{ site.baseurl }} 


# 基于改进型的YOLOv8智能消防监控系统

<div class="project-actions">
  <a href="{{ site.baseurl }}/projects/" class="btn btn-default btn-raised btn-sm">返回项目列表</a>
  <a href="#my-work" class="btn btn-primary btn-raised btn-sm">查看我的主要工作</a>
  <a href="#future" class="btn btn-info btn-raised btn-sm">查看未来发展方向</a>
</div>


## 项目时间与成果

**项目周期**：2023年10月 – 至今

**项目成果**：
- 🏆 **校级大学生创新创业训练计划项目立项**（2024年）
- 🏆 **2025年广东省大学生计算机设计大赛人工智能实践赛 广东省 三等奖**（2025年）
- 🏆 **第十八届"挑战杯"广东大学生课外学术科技作品竞赛 广东省 三等奖**（2025年）
- 🏆 **第十八届"挑战杯"广东大学生课外学术科技作品竞赛 校内赛 特等奖**（2024年）
- 🏆 **第二十六届中国机器人及人工智能大赛新质生产力创新设计专项赛 广东赛区 三等奖**（2024年）
- 🏆 **第八届华为ICT大赛创新赛 校内赛 一等奖**（2023年）

**学术论文发表**：
- 📄 **DSS-YOLO: an improved lightweight real-time fire detection model based on YOLOv8** <br/>
  **H Wang**, X Fu, Z Yu, Z Zeng - Scientific Reports, 2025 - nature.com <br/>
  链接：<https://www.nature.com/articles/s41598-025-93278-w>
- 📄 **Lightweight Intelligent Fire Monitoring System Based on Flask and YOLOv8** <br/>
  Z Zheng, X Cai, **H Wang**, X Fu - 2024 2nd AIAC, 2024 - ieeexplore.ieee.org <br/>
  链接：<https://ieeexplore.ieee.org/abstract/document/10899473>

**软件著作权**：
- 💻 **火眼金睛消防监控平台[简称：火眼金睛]V1.0**（2025年03月）
- 💻 **目标检测智能分析平台[简称：智眸视界]V1.0**（2025年07月）
- 💻 **慧眼安防安全帽识别平台[简称：慧眼安防]V1.0**（2025年12月）

## 项目背景与目标

针对传统消防监控依赖传感器检测、有效感知范围短、易受粉尘 / 局部热源干扰、需人工确认火情，且火灾早期小火焰、烟雾弥漫、目标易被遮挡导致漏检、
实时性差、复杂场景识别精度不足的行业痛点，结合智慧消防与嵌入式部署需求，探索轻量化 YOLOv8 改进策略，解决小目标火情、遮挡目标、
复杂背景下的火灾检测难题，设计并实现 AegisFire 火盾 —— 基于改进型的YOLOv8智能消防监控系统。实现系统轻量化端到端落地，
实现低成本、轻量化、高精度、实时性的火灾检测方案，满足边缘设备、监控摄像头、无人机等多终端部署需求。


## 核心技术栈
- 算法模型：DSS-YOLOv8（DynamicConv、SEAM、SPPELAN）、实时目标检测、多尺度特征融合、数据增强
- 开发框架：PyTorch、OpenCV、Ultralytics YOLO、Streamlit（前端可视化）
- 工程开发：Python、MySQL（数据存储）、Flask（后端接口）
- 工具与环境：Git、Ubuntu（服务器部署）、Roboflow（数据集管理）、Matplotlib（实验可视化）、CUDA（GPU 加速）

## 系统架构
系统采用 “数据采集→预处理→模型训练→推理检测→结果存储→可视化展示” 的端到端轻量化架构，分为四大核心模块：① 数据处理模块、
② DSS-YOLOv8 检测模块、③ 数据管理模块、④ 可视化监控模块，各模块协同工作，实现室内、森林、建筑等多场景下火焰小目标、遮挡火情
的实时识别与预警。

![改进型YOLOv8智能消防监控系统架构图]({{ site.baseurl }}/static/img/fire_detection/full_framework.png)

## 核心工作与创新点
### （一）YOLOv8模型改进
- 主干网络优化：将 YOLOv8n 主干网络中所有C2f 模块替换为 DynamicConv 模块，在不损失特征提取能力的前提下，降低模型计算量与参数量，
实现轻量化。通过动态卷积自适应调整感受野，对远距离、小尺寸火焰特征更敏感。
- 注意力机制增强：在检测头（Head）特征融合位置融入SEAM 注意力机制，强化模型对遮挡火情、小目标火焰的特征关注与定位能力， 提升复杂场景鲁棒性。
- 多尺度特征优化：在主干网络末端采用SPPELAN 模块替代原始 SPPF 模块，通过空间金字塔池化与高效层级聚合，
增强不同尺度火灾目标的特征提取与定位精度。<br>
  ![DSS-YOLO改进架构图]({{ site.baseurl }}/static/img/fire_detection/framework.png)<br>
- 数据增强策略：采用旋转、平移、缩放、HSV 变换、Mosaic 混合等增强方式，基于 mytest-hrswj 公开火灾数据集（2384 张标注样本，
覆盖室内、森林、建筑场景）扩充训练数据，提升模型泛化能力。<br>
  ![data_agumentation]({{ site.baseurl }}/static/img/fire_detection/data_agumentation.png)

### （二）系统开发与部署
- 模型训练与验证：基于 PyTorch 完成 DSS-YOLOv8 模型训练与调参，通过消融实验验证 DynamicConv、SEAM、SPPELAN 各模块的有效性；
模型轻量化优化后可适配嵌入式 / 移动设备部署。
- 系统集成与部署：基于 Streamlit 框架开发轻量化火灾监控可视化系统，支持图片、视频、本地摄像头实时检测；采用 MySQL 设计用户分表存储，
实现检测结果安全存储与历史记录快速查询。
- 可视化分析功能：提供目标类别分布、置信度分布、目标数量变化、火情位置热力图等多维分析，辅助火灾态势判断。

![Streamlit]({{ site.baseurl }}/static/img/fire_detection/Streamlit.png)<br>
![Streamlit部署图]({{ site.baseurl }}/static/img/fire_detection/deploy-streamlit.png)<br>
![部署图]({{ site.baseurl }}/static/img/fire_detection/deploy.png)


## 实验结果与系统效果
- 模型性能：相较于原始 YOLOv8n，mAP50 提升 0.6%、召回率提升 1.6%，模型参数量降低 3.4%，计算量（FLOPs）降低 12.3%，
实现精度与轻量化的平衡。<br>
  ![消融实验]({{ site.baseurl }}/static/img/fire_detection/ablation.png)<br>
  ![对比实验]({{ site.baseurl }}/static/img/fire_detection/contrast.png)

- 场景适配：可稳定检测远距离小火焰、遮挡火情、多尺度火灾目标，在室内、森林、建筑等复杂场景下漏检率与误报率显著降低。<br>
  ![val1]({{ site.baseurl }}/static/img/fire_detection/val1.png)<br>
  ![val2]({{ site.baseurl }}/static/img/fire_detection/val2.png)

- 实时性：模型轻量化后推理速度更快，满足火灾早期实时检测需求，支持边缘端低算力设备部署。
- 系统功能：支持多输入方式检测、结果可视化、历史记录回溯、用户权限管理，操作简洁，适配实际消防监控使用场景。


## 项目价值与亮点总结

提出的 DSS-YOLOv8 改进策略，为火灾小目标、遮挡目标检测提供了轻量化可行方案，相关实验结果已发表于Scientific Reports等权威期刊 / 会议，
丰富了轻量化目标检测算法在智慧消防领域的应用研究。 完整实现 **“算法改进→模型训练→系统开发→部署落地”** 全链路开发，
体现扎实的深度学习算法能力与工程实践能力；项目精准解决消防监控行业痛点， 符合国家 “智慧消防” 战略要求，
可直接应用于建筑、林业、工业等消防监控场景，适配算法工程师、智能消防系统开发等岗位。


### 核心亮点

- 学术与工程双落地：算法改进具备创新性，实验数据详实，系统具备实际消防监控应用价值。
- 轻量化优势显著：在提升检测精度的同时降低计算开销，适配嵌入式、移动等资源受限设备。
- 场景针对性强：聚焦火灾早期小目标、遮挡目标检测痛点，解决传统传感器与视觉模型的核心缺陷。
- 全流程工程能力：覆盖数据集处理、模型改进、训练验证、系统开发、部署应用全环节，项目完整性高。

