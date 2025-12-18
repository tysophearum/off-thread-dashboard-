import { useState } from 'react';
import { Toggle } from './Toggle';
import { Send, Users, Clock } from 'lucide-react';

export function AutomateMessages() {
  const [autoReplyEnabled, setAutoReplyEnabled] = useState(true);
  const [broadcastEnabled, setBroadcastEnabled] = useState(false);

  const broadcasts = [
    { id: 1, name: 'Weekly Newsletter', recipients: 234, lastSent: '2 days ago', status: 'completed' },
    { id: 2, name: 'Product Update', recipients: 189, lastSent: '5 days ago', status: 'completed' },
    { id: 3, name: 'Event Invitation', recipients: 156, lastSent: '1 week ago', status: 'completed' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Automate Messages</h2>
        <p className="text-neutral-600">Manage auto-replies and broadcast messages to connections</p>
      </div>

      {/* Auto Reply Section */}
      <div className="bg-white rounded-xl border border-neutral-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-neutral-900 mb-1">Auto Reply to DMs</h3>
            <p className="text-sm text-neutral-500">Automatically respond to incoming direct messages</p>
          </div>
          <Toggle enabled={autoReplyEnabled} onChange={setAutoReplyEnabled} />
        </div>

        {autoReplyEnabled && (
          <div className="border-t border-neutral-200 pt-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Away Message
              </label>
              <textarea
                rows={4}
                defaultValue="Thanks for reaching out! I'll get back to you within 24 hours. In the meantime, feel free to check out my latest posts!"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent resize-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Reply Delay (minutes)
                </label>
                <input
                  type="number"
                  defaultValue={2}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Active Hours
                </label>
                <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent">
                  <option>24/7</option>
                  <option>Business Hours (9-5)</option>
                  <option>Custom</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Broadcast Section */}
      <div className="bg-white rounded-xl border border-neutral-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-neutral-900 mb-1">Broadcast to Connections</h3>
            <p className="text-sm text-neutral-500">Send messages to multiple connections at once</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors">
            <Send className="w-4 h-4" />
            New Broadcast
          </button>
        </div>

        <div className="border-t border-neutral-200 pt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Connection Filter
            </label>
            <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent">
              <option>All Connections</option>
              <option>1st Degree Connections</option>
              <option>By Industry</option>
              <option>By Location</option>
              <option>Custom List</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Message Template
            </label>
            <textarea
              rows={4}
              placeholder="Hi {name}, I wanted to share something exciting with you..."
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent resize-none"
            />
          </div>
        </div>
      </div>

      {/* Broadcast History */}
      <div className="bg-white rounded-xl border border-neutral-200 p-6">
        <h3 className="font-semibold text-neutral-900 mb-6">Broadcast History</h3>
        
        <div className="space-y-3">
          {broadcasts.map((broadcast) => (
            <div
              key={broadcast.id}
              className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                  <Send className="w-5 h-5 text-neutral-600" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">{broadcast.name}</p>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="flex items-center gap-1 text-sm text-neutral-500">
                      <Users className="w-4 h-4" />
                      {broadcast.recipients} recipients
                    </span>
                    <span className="flex items-center gap-1 text-sm text-neutral-500">
                      <Clock className="w-4 h-4" />
                      {broadcast.lastSent}
                    </span>
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                {broadcast.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
