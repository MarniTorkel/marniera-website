export default {
  "id": "rag",
  "title": "RAG & Context",
  "summary": "Context windows, embeddings, retrieval, reranking, memory and citation patterns.",
  "categories": [
    {
      "id": "rag-0",
      "title": "Context Windows",
      "cards": [
        {
          "id": "rag-0-card",
          "title": "Finite working space",
          "body": "The context window limits how much input and generated output a model can handle together. More context does not guarantee better use of evidence; prioritise relevance and preserve important constraints."
        }
      ]
    },
    {
      "id": "rag-1",
      "title": "Chunking",
      "cards": [
        {
          "id": "rag-1-card",
          "title": "Keep useful units together",
          "body": "Split documents along meaningful boundaries and retain document IDs, headings and offsets. Tune size and overlap using retrieval tests; excessive overlap increases duplication and cost."
        }
      ]
    },
    {
      "id": "rag-2",
      "title": "Embeddings",
      "cards": [
        {
          "id": "rag-2-card",
          "title": "Use compatible representations",
          "body": "Embed queries and documents with compatible models and preprocessing. Store model/version metadata; changing the embedding model may require rebuilding the index."
        }
      ]
    },
    {
      "id": "rag-3",
      "title": "Vector Search",
      "cards": [
        {
          "id": "rag-3-card",
          "title": "Similarity candidates",
          "body": "Nearest-neighbour search retrieves nearby vectors under a chosen similarity measure. Semantic similarity is not factual correctness or permission to access a document."
        }
      ]
    },
    {
      "id": "rag-4",
      "title": "Hybrid Search",
      "cards": [
        {
          "id": "rag-4-card",
          "title": "Combine complementary signals",
          "body": "Combine lexical matching with vector similarity to recover exact identifiers and semantic matches. Tune fusion and filters on representative queries."
        }
      ]
    },
    {
      "id": "rag-5",
      "title": "Reranking",
      "cards": [
        {
          "id": "rag-5-card",
          "title": "Reorder retrieved candidates",
          "body": "A reranker scores a smaller candidate set against the query. It can improve relevance but adds latency and cannot recover documents missed by the initial retrieval step."
        }
      ]
    },
    {
      "id": "rag-6",
      "title": "RAG Pipeline",
      "cards": [
        {
          "id": "rag-6-card",
          "title": "Ground generation in evidence",
          "body": "Query → Retrieve → Rerank → Construct context → Generate → Cite / verify. Apply access filters before supplying evidence and allow an insufficient-evidence outcome."
        }
      ]
    },
    {
      "id": "rag-7",
      "title": "Memory",
      "cards": [
        {
          "id": "rag-7-card",
          "title": "Separate knowledge from user state",
          "body": "A document index provides searchable knowledge. User preferences and task memory serve different purposes and need separate retention, update and access rules."
        }
      ]
    },
    {
      "id": "rag-8",
      "title": "Context Compression",
      "cards": [
        {
          "id": "rag-8-card",
          "title": "Summarise with provenance",
          "body": "Remove duplication and irrelevant text while retaining claims, qualifiers and source references. Evaluate whether compression loses evidence needed for the question."
        }
      ]
    },
    {
      "id": "rag-9",
      "title": "Citations",
      "cards": [
        {
          "id": "rag-9-card",
          "title": "Make claims traceable",
          "body": "Attach references to supporting passages, not merely a list of retrieved documents. Check that each cited source supports the specific claim and distinguish inference from source statements."
        }
      ]
    },
    {
      "id": "rag-10",
      "title": "Retrieval Evaluation",
      "cards": [
        {
          "id": "rag-10-card",
          "title": "Measure relevance separately",
          "body": "Use query-document relevance labels. Track precision@k, recall@k and rank-sensitive metrics such as MRR or nDCG where appropriate; evaluate answer faithfulness separately."
        }
      ]
    }
  ]
}
