export default {
  "id": "foundations",
  "title": "AI Foundations",
  "summary": "AI vs ML vs deep learning, model types, inference, embeddings, training and core terminology.",
  "categories": [
    {
      "id": "foundations-0",
      "title": "AI / ML / Deep Learning",
      "cards": [
        {
          "id": "foundations-0-card",
          "title": "Related concepts",
          "body": "AI concerns systems performing tasks associated with intelligence. Machine learning fits patterns from data. Deep learning is a subset of machine learning based on multi-layer neural networks; AI also includes non-learning approaches."
        }
      ]
    },
    {
      "id": "foundations-1",
      "title": "Core Concepts",
      "cards": [
        {
          "id": "foundations-1-card",
          "title": "Data, features and generalisation",
          "body": "A feature represents information used by a model; a label is a target in supervised learning. Generalisation is performance on unseen cases. Evaluate on data kept separate from training and tuning."
        }
      ]
    },
    {
      "id": "foundations-2",
      "title": "Model Types",
      "cards": [
        {
          "id": "foundations-2-card",
          "title": "Match the task",
          "body": "Discriminative models predict targets or decision boundaries. Generative models represent aspects of a data distribution and can generate samples. Language, vision and multimodal models differ in supported inputs and outputs."
        }
      ]
    },
    {
      "id": "foundations-3",
      "title": "Learning Paradigms",
      "cards": [
        {
          "id": "foundations-3-card",
          "title": "How a model learns",
          "body": "Supervised learning uses labelled examples; unsupervised learning seeks structure without target labels. Self-supervised learning derives training targets from data. Reinforcement learning optimises behaviour using reward signals."
        }
      ]
    },
    {
      "id": "foundations-4",
      "title": "Common Algorithms",
      "cards": [
        {
          "id": "foundations-4-card",
          "title": "Useful families",
          "body": "Linear and logistic regression offer interpretable baselines. Trees and ensembles model nonlinear relationships. Clustering groups similar observations; PCA finds directions of variance. Selection depends on the task, assumptions and evaluation."
        }
      ]
    },
    {
      "id": "foundations-5",
      "title": "Generative AI",
      "cards": [
        {
          "id": "foundations-5-card",
          "title": "Generation is not verification",
          "body": "Generative AI systems produce content or outputs from learned patterns. Plausible output may still be incorrect, unsupported or unsuitable for a particular context."
        }
      ]
    },
    {
      "id": "foundations-6",
      "title": "Embeddings",
      "cards": [
        {
          "id": "foundations-6-card",
          "title": "Vector representations",
          "body": "Embeddings map inputs into numerical vectors. Distance or similarity can support retrieval and clustering, but meaning depends on the model, training objective and domain."
        }
      ]
    },
    {
      "id": "foundations-7",
      "title": "Transformers",
      "cards": [
        {
          "id": "foundations-7-card",
          "title": "Attention and representations",
          "body": "Transformers use attention mechanisms to combine information across input positions. Architectures vary: encoders, decoders and encoder-decoder systems serve different tasks. Tokenisation and positional information also matter."
        }
      ]
    },
    {
      "id": "foundations-8",
      "title": "Training vs Inference",
      "cards": [
        {
          "id": "foundations-8-card",
          "title": "Learning parameters vs using them",
          "body": "Training updates model parameters using an objective. Inference uses a trained model to produce outputs. Providing context during inference usually does not update the underlying model weights."
        }
      ]
    },
    {
      "id": "foundations-9",
      "title": "AI Infrastructure",
      "cards": [
        {
          "id": "foundations-9-card",
          "title": "The system around a model",
          "body": "Data pipelines, compute, storage, serving, monitoring and access controls support reliable model use. Track datasets, model versions and environments so experiments and deployments can be reproduced."
        }
      ]
    }
  ]
}
