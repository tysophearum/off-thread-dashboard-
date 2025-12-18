import { useState } from 'react';
import { Overview } from './components/Overview';
import { AutomateComments } from './components/AutomateComments';
import { AutomateMessages } from './components/AutomateMessages';
import { MessageSquare, MessageCircle, Send } from 'lucide-react';

type NavSection = 'overview' | 'comments' | 'messages';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('messages');

  const navItems = [
    { id: 'overview' as NavSection, label: 'Overview', icon: MessageSquare },
    { id: 'comments' as NavSection, label: 'Automate Comments', icon: MessageCircle },
    { id: 'messages' as NavSection, label: 'Automate Messages', icon: Send },
  ];

  return (
    <div className="flex h-screen bg-neutral-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-neutral-200 flex flex-col">
        <div className="p-6 border-b border-neutral-200">
          <h1 className="text-xl font-semibold text-neutral-900">OffThread</h1>
          <p className="text-sm text-neutral-500 mt-1">LinkedIn Automation</p>
        </div>
        
        <nav className="flex-1 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeSection === item.id
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-neutral-200">
          <div className="bg-neutral-100 rounded-lg p-4">
            <p className="text-xs font-medium text-neutral-900 mb-1">Today's Activity</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-neutral-900">47</span>
              <span className="text-xs text-neutral-500">interactions</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {activeSection === 'overview' && <Overview />}
          {activeSection === 'comments' && <AutomateComments />}
          {activeSection === 'messages' && <AutomateMessages />}
        </div>
      </main>
    </div>
  );
}
