# internal/ — 对内知识

仅 Toolkit Agent（src/agentapp 内核 RAG）使用的内部知识。

- 内容特征：Toolkit/MCP/Host 内部机制、Agent 工作流、平台深挖结论等不适合对外的知识
- 分发：对内 + 通用 → 打包进 Agent 被向量索引进 RAG；不进入插件
- 编写约束：按文档检索友好编写，小节自含、标题语义明确（AgentApp_Design_Spec D5 文档详尽化原则）
