import { useState } from "react";

const AIChatAssistant = () => {

  const [messages, setMessages] = useState([

    {
      type: "ai",
      text: "Hello Abhi 👋 I’m your AI ERP Assistant. How can I help you today?",
    },

  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {

    if (!input.trim()) return;

    const userMessage = {
      type: "user",
      text: input,
    };

    const aiMessage = {
      type: "ai",
      text: "AI is analyzing your request and generating insights...",
    };

    setMessages([
      ...messages,
      userMessage,
      aiMessage,
    ]);

    setInput("");

  };

  const quickPrompts = [

    "Show low stock products",
    "Predict next month demand",
    "Best performing supplier",
    "Inventory health summary",
    "Products expiring soon",
    "Generate procurement insights",

  ];

  return (

    <div className="grid grid-cols-12 gap-6 h-[85vh]">

      {/* LEFT PANEL */}

      <div className="col-span-3 bg-white rounded-3xl shadow-sm p-6 flex flex-col">

        <div>

          <h1 className="text-3xl font-bold">
            AI Assistant
          </h1>

          <p className="text-slate-500 mt-2">
            Smart ERP AI assistant
          </p>

        </div>

        {/* QUICK PROMPTS */}

        <div className="mt-10">

          <h2 className="font-semibold text-slate-700 mb-4">
            Quick Prompts
          </h2>

          <div className="space-y-3">

            {quickPrompts.map((prompt, index) => (

              <button
                key={index}
                onClick={() => setInput(prompt)}
                className="w-full text-left border border-slate-200 rounded-2xl p-4 hover:bg-slate-50 transition"
              >

                {prompt}

              </button>

            ))}

          </div>

        </div>

        {/* AI STATUS */}

        <div className="mt-auto bg-blue-50 rounded-2xl p-5">

          <h3 className="font-semibold text-blue-700">
            AI Status
          </h3>

          <p className="text-sm text-slate-600 mt-2">
            AI engine active and monitoring inventory operations.
          </p>

        </div>

      </div>

      {/* CHAT SECTION */}

      <div className="col-span-9 bg-white rounded-3xl shadow-sm flex flex-col">

        {/* CHAT HEADER */}

        <div className="border-b border-slate-200 p-6 flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold">
              ERP AI Chat
            </h2>

            <p className="text-slate-500 mt-1">
              Ask AI about inventory, suppliers, reports and analytics
            </p>

          </div>

          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">

            AI Online

          </div>

        </div>

        {/* CHAT BODY */}

        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">

          {messages.map((message, index) => (

            <div
              key={index}
              className={`flex ${
                message.type === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-xl px-5 py-4 rounded-3xl ${
                  message.type === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-slate-200 text-slate-700"
                }`}
              >

                {message.text}

              </div>

            </div>

          ))}

        </div>

        {/* CHAT INPUT */}

        <div className="border-t border-slate-200 p-5">

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Ask AI anything about inventory, suppliers, procurement..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              className="flex-1 border border-slate-300 rounded-2xl px-5 py-4 outline-none"
            />

            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-2xl transition"
            >

              Send

            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default AIChatAssistant;