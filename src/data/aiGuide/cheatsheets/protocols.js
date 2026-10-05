export default {
  "id": "protocols",
  "title": "MCP & Protocols",
  "summary": "MCP, A2A and standards for connecting agents, tools and systems.",
  "lastReviewed": "2026-09-13",
  "sources": [
    [
      "MCP specification",
      "https://modelcontextprotocol.io/specification/2026-07-28"
    ],
    [
      "A2A documentation",
      "https://a2a-protocol.org/latest/"
    ]
  ],
  "categories": [
    {
      "id": "protocols-0",
      "title": "MCP Overview",
      "cards": [
        {
          "id": "protocols-0-card",
          "title": "Tools and context",
          "body": "MCP standardises connections between AI applications and external tools, context and services. It does not itself supply a model or determine an application’s permission policy."
        }
      ]
    },
    {
      "id": "protocols-1",
      "title": "Clients",
      "cards": [
        {
          "id": "protocols-1-card",
          "title": "Host-side connectors",
          "body": "A host application uses clients to connect to servers. Check the protocol revision and capabilities supported by both ends."
        }
      ]
    },
    {
      "id": "protocols-2",
      "title": "Servers",
      "cards": [
        {
          "id": "protocols-2-card",
          "title": "Expose capabilities",
          "body": "Servers provide tools, resources or prompts. Local and remote deployments have different transport, authentication and operational requirements."
        }
      ]
    },
    {
      "id": "protocols-3",
      "title": "Tools",
      "cards": [
        {
          "id": "protocols-3-card",
          "title": "Callable functions",
          "body": "Tools expose operations with input and output contracts. Validate arguments, handle failures and authorise side effects outside model-generated text."
        }
      ]
    },
    {
      "id": "protocols-4",
      "title": "Resources",
      "cards": [
        {
          "id": "protocols-4-card",
          "title": "Read context",
          "body": "Resources expose data for a host or model to use. Access to one resource does not imply permission to transmit its contents elsewhere."
        }
      ]
    },
    {
      "id": "protocols-5",
      "title": "Prompts",
      "cards": [
        {
          "id": "protocols-5-card",
          "title": "Reusable templates",
          "body": "Prompts provide reusable message templates or workflows. Treat supplied content according to its trust level; templates do not override user consent."
        }
      ]
    },
    {
      "id": "protocols-6",
      "title": "Authorization",
      "cards": [
        {
          "id": "protocols-6-card",
          "title": "Identity and access",
          "body": "Use the authorization requirements for the selected transport and revision. Authenticate callers, enforce resource scopes and protect credentials; tool descriptions are not access controls."
        }
      ]
    },
    {
      "id": "protocols-7",
      "title": "Tasks",
      "cards": [
        {
          "id": "protocols-7-card",
          "title": "Asynchronous extension",
          "body": "Tasks support long-running operations through durable handles, status and polling. Verify extension support at both ends before depending on it."
        }
      ]
    },
    {
      "id": "protocols-8",
      "title": "MCP Apps",
      "cards": [
        {
          "id": "protocols-8-card",
          "title": "Interactive extension",
          "body": "MCP Apps support interactive UI within compatible hosts. Support is optional; review sandbox and data-sharing boundaries before exposing sensitive data."
        }
      ]
    },
    {
      "id": "protocols-9",
      "title": "A2A",
      "cards": [
        {
          "id": "protocols-9-card",
          "title": "Agent interoperability",
          "body": "A2A focuses on communication between agents, including delegated tasks and exchanged outputs. It is distinct from MCP’s tool/context integration role."
        }
      ]
    },
    {
      "id": "protocols-10",
      "title": "Agent Communication",
      "cards": [
        {
          "id": "protocols-10-card",
          "title": "Preserve contracts and trust",
          "body": "Define task ownership, input/output formats, cancellation and error handling across agents. Remote messages should not silently gain local privileges."
        }
      ]
    },
    {
      "id": "protocols-11",
      "title": "Protocol Selection",
      "cards": [
        {
          "id": "protocols-11-card",
          "title": "Choose by boundary",
          "body": "Use MCP for portable tool and context integrations; consider A2A for interoperable agent communication. A direct API may suffice for a single tightly coupled service."
        }
      ]
    }
  ]
}
