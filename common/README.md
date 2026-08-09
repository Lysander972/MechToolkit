# common/ — 通用知识

面向两边（插件对外 Skill 与 Agent 内部 RAG）共用的 CreatAI 平台通用知识。

- 内容特征：平台术语、核心概念、硬约束等不区分使用者的通用知识
- 分发：通用 + 对外 → 打包 gzip 进插件；通用 + 对内 → 打包进 Agent 被向量索引进 RAG
- 编写约束：按文档检索友好编写，小节自含、标题语义明确（AgentApp_Design_Spec D5 文档详尽化原则）
