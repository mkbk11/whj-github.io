---
layout: default
title: 血细胞检测系统
permalink: /projects/Blood_Cell.html
---

# BCDetection-X：基于深度学习的血细胞智能检测系统

<div class="project-actions">
  <a href="{{ site.baseurl }}/projects/" class="btn btn-default btn-raised btn-sm">返回项目列表</a>
  <a href="#results" class="btn btn-primary btn-raised btn-sm">查看项目成果</a>
</div>

## 项目背景

传统血细胞检测主要依靠人工显微镜观察与手工计数，存在效率低、主观性强、易误判、标准化程度低等问题，无法满足现代临床快速诊断、大规模筛查与实时监测的需求。
随着医学影像与深度学习技术快速发展，将 AI 目标检测应用于血细胞智能识别，成为智慧医疗的重要方向。本项目旨在打造一套高精度、轻量化、易使用、全流程自动化的血细胞智能检测系统，为临床辅助诊断、健康监测与医学教学提供高效工具。

## 项目时间与成果 {#results}

**项目周期**：2024年6⽉ – 2025年8⽉

**项目成果**：
- 🏆 **远光杯大湾区珠港澳计算机设计大赛人工智能与大数据技术与应用赛道  三等奖**（2025年）

**学术论文发表**：
- 📄 **BCdetection-YOLOv8 An improved blood cell detection algorithm based on YOLOv8n** <br/>
**H Wang**, L Hu, Z Zeng, Q Xu 2025 IEEE 6th AINIT, 2025•ieeexplore.ieee.org

## 使用到的技术

- Python + PyTorch：搭建和训练血细胞检测模型
- YOLOv8 + DynamicConv：作为基础检测框架，改进网络结构提升检测精度
- 旋转、模糊、平移：数据增强技术，增加模型对不同拍摄条件的适应能力
- OpenCV + Streamlit + Altair：Web界面开发、图像处理与可视化
- 简单可视化与统计脚本：观察训练过程，分析模型表现
- MySQL：数据存储与管理
- DeekSeek：大语言模型智能分析检测结果与评估

## 我的主要工作

### 1. 血细胞数据集构建与处理
- 负责收集公开血细胞图像数据集，补充实验室拍摄的样本图片
- 对红细胞、白细胞、血小板等不同类型细胞进行精细标注
- 编写数据增强脚本，提高模型对不同拍摄条件的适应能力

### 2. 算法改进与模型训练
- 负责 YOLOv8 模型改进，设计并实现 DynamicConv 替换 C2f 结构，完成模型轻量化与精度优化
- 对比 Faster-RCNN/YOLOv5/YOLOv6/YOLOv8 等模型，完成性能验证与指标统计
![模型架构]({{ site.baseurl }}/static/img/BCBlood_detectiom/structure.png)
![mAP50]({{ site.baseurl }}/static/img/BCBlood_detectiom/mAP50.png)

### 3. 系统功能开发
- 基于 Streamlit 搭建Web 交互界面，实现图像 / 视频 / 摄像头多模态输入
- 开发检测结果可视化、细胞计数统计、异常预警模块
- 完成自动化报告生成（PDF/Excel）与参数调优面板开发
![界面展示]({{ site.baseurl }}/static/img/BCBlood_detectiom/streamlit.png)

### 4. AI 辅助模块集成
- 对接大语言模型，实现检测结果解读、健康建议、医学问答功能
- 构建规则引擎，实现贫血、感染、白血病等疾病初步预警
![AI分析]({{ site.baseurl }}/static/img/BCBlood_detectiom/AI analyisi.png)

### 5. 项目组织与成果整理
- 作为项目负责人，协调团队成员分工和进度安排
- 组织参加相关学术竞赛，准备答辩材料和演示内容
- 主导论文撰写和软件著作权申请工作

## 项目总结与价值
本项目完成了从算法创新 → 系统开发 → 功能集成 → 成果落地的全流程研发。
![系统架构]({{ site.baseurl }}/static/img/BCBlood_detectiom/architecture.png)
![系统流程]({{ site.baseurl }}/static/img/BCBlood_detectiom/process.png)


BCdetection-X 以精准、高效、易用为目标，完成从算法创新到系统落地的全流程开发。通过 DynamicConv 动态卷积实现模型精度与效率双重提升，搭建多模态输入、可视化分析、AI 辅助诊断、自动化报告的完整系统，解决传统血细胞检测效率低、易出错、智能化不足的问题。

### 技术成果


### 实际应用价值
- **医疗辅助诊断**：为医院检验科提供自动化血细胞识别辅助工具
- **医学教育培训**：用于医学院校的教学演示和实验训练
- **远程医疗服务**：支持基层医疗机构和偏远地区的血细胞初步筛查
- **科研数据挖掘**：为医学研究人员提供细胞定量分析工具

### 未来发展方向

**多模态医学影像分析**：
- 扩展支持其他类型的医学影像，如病理切片、CT影像等
- 研究多模态融合技术，结合图像特征和临床数据进行综合判断
- 探索3D医学影像的处理和分析方法

**临床落地应用**：
- 与医院合作进行临床验证，收集真实场景下的使用反馈
- 开发符合医疗行业标准的数据安全和隐私保护方案
- 研究模型的可解释性，增强医务人员对AI结果的信任度

**技术持续优化**：
- 收集更多多样化的血细胞图像数据，提升模型泛化能力
- 研究更轻量化的网络架构，适应移动设备和嵌入式部署
- 探索联邦学习等先进技术，在保护数据隐私的前提下进行模型训练

本项目不仅是一次技术探索，更为智能医疗领域的实际应用提供了有价值的实践经验和基础积累。 
