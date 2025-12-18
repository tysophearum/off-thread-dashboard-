import { useState } from 'react';
import { Toggle } from './Toggle';
import { Settings, Plus } from 'lucide-react';

export function AutomateComments() {
  const [autoReplyEnabled, setAutoReplyEnabled] = useState(true);
  const [autoMessageEnabled, setAutoMessageEnabled] = useState(false);

  const templates = [
    { id: 1, name: 'Thank You Reply', content: 'Thanks for your comment! 🙏', uses: 124 },
    { id: 2, name: 'More Info', content: "I'd love to share more details with you. Check your DMs!", uses: 89 },
    { id: 3, name: 'Question Response', content: 'Great question! Let me get back to you on that.', uses: 56 },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Automate Comments</h2>
        <p className="text-neutral-600">Set up automatic replies and DM triggers for comments</p>
      </div>

      {/* Auto Reply Section */}
      <div className="bg-white rounded-xl border border-neutral-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-neutral-900 mb-1">Auto Reply to Comments</h3>
            <p className="text-sm text-neutral-500">Automatically respond to comments on your posts</p>
          </div>
          <Toggle enabled={autoReplyEnabled} onChange={setAutoReplyEnabled} />
        </div>

        {autoReplyEnabled && (
          <div className="border-t border-neutral-200 pt-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Reply Delay (seconds)
              </label>
              <input
                type="number"
                defaultValue={5}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Keywords to Trigger (comma separated)
              </label>
              <input
                type="text"
                placeholder="info, details, learn more"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
              />
            </div>
          </div>
        )}
      </div>

      {/* Auto Message Section */}
      <div className="bg-white rounded-xl border border-neutral-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-neutral-900 mb-1">Auto Send DM from Comments</h3>
            <p className="text-sm text-neutral-500">Detect comments and automatically send a DM</p>
          </div>
          <Toggle enabled={autoMessageEnabled} onChange={setAutoMessageEnabled} />
        </div>

        {autoMessageEnabled && (
          <div className="border-t border-neutral-200 pt-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Trigger Keywords
              </label>
              <input
                type="text"
                placeholder="interested, more info, dm me"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                DM Template
              </label>
              <textarea
                rows={4}
                placeholder="Hi {name}, I saw your comment and wanted to reach out..."
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent resize-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* Templates Section */}
      <div className="bg-white rounded-xl border border-neutral-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-neutral-900">Reply Templates</h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors">
            <Plus className="w-4 h-4" />
            Add Template
          </button>
        </div>

        <div className="space-y-3">
          {templates.map((template) => (
            <div
              key={template.id}
              className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors"
            >
              <div className="flex-1">
                <p className="font-medium text-neutral-900 mb-1">{template.name}</p>
                <p className="text-sm text-neutral-500">{template.content}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-neutral-500">{template.uses} uses</span>
                <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                  <Settings className="w-4 h-4 text-neutral-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
