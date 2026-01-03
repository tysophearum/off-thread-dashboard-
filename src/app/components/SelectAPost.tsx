import { MessageSquare, MessageCircle, TrendingUp, Clock } from 'lucide-react';

export function SelectAPost() {
  const stats = [
    {
      label: 'Messages Replied',
      value: '28',
      change: '+12%',
      icon: MessageSquare,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Comments Replied',
      value: '19',
      change: '+8%',
      icon: MessageCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      label: 'Total Interactions',
      value: '47',
      change: '+15%',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ];

  const recentActivity = [
    { type: 'Comment Reply', user: 'Sarah Johnson', time: '2 minutes ago', status: 'completed' },
    { type: 'DM Sent', user: 'Michael Chen', time: '5 minutes ago', status: 'completed' },
    { type: 'Comment Reply', user: 'Emma Williams', time: '12 minutes ago', status: 'completed' },
    { type: 'DM Sent', user: 'James Brown', time: '18 minutes ago', status: 'completed' },
    { type: 'Comment Reply', user: 'Olivia Davis', time: '25 minutes ago', status: 'completed' },
  ];

  return (
    <div className="layout-content-container flex flex-col max-w-[1024px] flex-1">
      {/*  <!--  Breadcrumbs --> */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 px-4 mb-4">
        <a className="text-text-secondary text-sm font-medium leading-normal hover:text-black transition-colors" href="#">Dashboard</a>
        <span className="text-text-secondary text-sm font-medium leading-normal">/</span>
        <a className="text-text-secondary text-sm font-medium leading-normal hover:text-black transition-colors" href="#">New Automation</a>
        <span className="text-text-secondary text-sm font-medium leading-normal">/</span>
        <span aria-current="page" className="text-black text-sm font-medium leading-normal">Select Post</span>
      </nav>
      {/*  <!--  Page Heading --> */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-4 mb-8">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h1 className="text-black text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Select a Post to Automate</h1>
          <p className="text-text-secondary text-base font-normal leading-relaxed">Choose a recent LinkedIn post to set up your automation sequence. We'll track engagement on this post.</p>
        </div>
        <div className="flex gap-2">
          {/*  <!--  Action hint/status --> */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Syncing recent posts
          </span>
        </div>
      </div>
      {/*  <!--  Search & Filters --> */}
      <div className="flex flex-col gap-4 px-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary material-symbols-outlined">search</span>
            <input className="w-full rounded-xl border border-border-dark bg-card-dark pl-11 pr-4 h-12 text-black placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="Search by keywords or hashtags..." type="text" />
          </div>
          <div className="relative w-full md:w-64">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary material-symbols-outlined">calendar_today</span>
            <input className="w-full rounded-xl border border-border-dark bg-card-dark pl-11 pr-4 h-12 text-black placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer" placeholder="Last 30 Days" type="text" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary material-symbols-outlined pointer-events-none text-sm">expand_more</span>
          </div>
        </div>
        {/*  <!--  Filter Chips --> */}
        <div className="flex gap-3 flex-wrap items-center">
          <span className="text-text-secondary text-sm font-medium mr-2">Show:</span>
          <button className="flex h-9 items-center justify-center gap-x-2 rounded-lg bg-primary text-white px-4 transition-colors">
            <span className="material-symbols-outlined text-[18px]">view_list</span>
            <span className="text-sm font-bold">All Posts</span>
          </button>
          <button className="flex h-9 items-center justify-center gap-x-2 rounded-lg bg-card-dark border border-border-dark text-text-secondary px-4 hover:border-primary/50 hover:text-black transition-all">
            <span className="material-symbols-outlined text-[18px]">text_fields</span>
            <span className="text-sm font-medium">Text Only</span>
          </button>
          <button className="flex h-9 items-center justify-center gap-x-2 rounded-lg bg-card-dark border border-border-dark text-text-secondary px-4 hover:border-primary/50 hover:text-black transition-all">
            <span className="material-symbols-outlined text-[18px]">image</span>
            <span className="text-sm font-medium">Media</span>
          </button>
          <button className="flex h-9 items-center justify-center gap-x-2 rounded-lg bg-card-dark border border-border-dark text-text-secondary px-4 hover:border-primary/50 hover:text-black transition-all">
            <span className="material-symbols-outlined text-[18px]">article</span>
            <span className="text-sm font-medium">Articles</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 pb-24">
        <div className="group relative flex flex-col rounded-xl bg-card-dark border-2 border-primary shadow-[0_0_0_1px_rgba(19,91,236,0.2)] overflow-hidden cursor-pointer transition-transform active:scale-[0.99]">
          <div className="absolute top-3 right-3 z-10">
            <div className="bg-primary text-white rounded-full p-1 shadow-lg h-8 w-8">
              <span className="material-symbols-outlined text-[20px] block">check</span>
            </div>
          </div>
          <div className="p-5 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-full bg-cover bg-center" data-alt="Avatar of user Sarah J." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTYjH1y7qEiI9NcwGzYpqU202vrDtf5R83BzF00RoDIYzwU7DCajP3RVRtvSr4Ij8DU-nLDBurV6lt_tc0hsIerzJL7oKHIqZ1i2bOD-DomS44_HMmHhQ9YEZVilk9kSP25FcrIMq3_Ib8czwEVcSuCZGSvjle3QB3KfgmLNJA6M95XN0TJ_ncjJI9PSIGTepFo5x5SLhV2Oev-t2jPosGnAr0ubGo3j63wNjkhUR6mFCpdeX_6pYRA8ncrVIzQk93smFFb5C_pF4")' }}></div>
              <div className="flex flex-col">
                <p className="text-black text-sm font-bold">Sarah Jenkins</p>
                <p className="text-text-secondary text-xs">2 days ago • <span className="material-symbols-outlined text-[10px] inline align-middle">public</span></p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                Excited to announce that our new feature is finally live! 🚀 We've been working hard for the past 3 months to bring this to...
              </p>
            </div>
            {/*  <!--  Media Preview --> */}
            <div className="w-full h-32 rounded-lg bg-cover bg-center mb-4 relative" data-alt="Abstract blue technology background representing new software features" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZ0TRNvLt9O4Z22Xe3pIDvhTDCg0lCZUiJJkLLObbUM55UVTRClcFx6CJ498eXWA6ZluD16xn5G4TUelEf3BXC2T7DIDSwKhL2Oc1BssZNEPkIwdgce1VOeubewt-R8RCMImq_PYZaCa1BCG3dd1C8V7l94Puv7-wWV93kZhfUqDw0NmxRK2-HWB7Gfaa8EuPleowhBBv1JCjm3f604u_iizg77CwwJitWx1V6mfPz4Qo150eZaV8CUrLi8uV5TsnnsSMzea1dLTk")' }}>
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            </div>
            <div className="mt-auto pt-4 border-t border-border-dark flex items-center justify-between text-text-secondary text-xs">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                  <span>245</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">comment</span>
                  <span>42</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">bar_chart</span>
                <span>3.2k views</span>
              </div>
            </div>
          </div>
        </div>
        {/*  <!--  Card 2 --> */}
        <div className="group relative flex flex-col rounded-xl bg-card-dark border border-border-dark hover:border-primary/50 hover:shadow-lg overflow-hidden cursor-pointer transition-all active:scale-[0.99]">
          {/*  <!--  Hover Select Hint --> */}
          <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-card-dark border border-border-dark text-text-secondary rounded-full p-1 shadow-lg">
              <span className="material-symbols-outlined text-[20px] block">radio_button_unchecked</span>
            </div>
          </div>
          <div className="p-5 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-full bg-cover bg-center" data-alt="Avatar of user Sarah J." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCunV4PNOcd3PHfpORS-G0Pv9-ro64UBtfjRqggYW_AIubovDupZ5-_NzNm1Ja_UZk32kjgnZAu415DizibyafxyVWrFAuayM4f3CpubrIkHOyk6IALEKRGyGJCgVX5GN6zVCyRsnAq_-bjPZ9_APJyi8VcBhpUp4foO0PUUS8sk4VeqK6CSHAn67ARD7Xpp_4lrm0DTqPek7k1jXYLyx7xda8RBUT1o_gxlpB1iOg8MtUwgcZHFIC75my60cFb0bukBsBj-YoZO3o")' }}></div>
              <div className="flex flex-col">
                <p className="text-black text-sm font-bold">Sarah Jenkins</p>
                <p className="text-text-secondary text-xs">5 days ago • <span className="material-symbols-outlined text-[10px] inline align-middle">public</span></p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                Are you leveraging AI in your daily workflow? Here are 5 tools that have completely transformed how I manage my time. #Productivity #AI #Tech
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-border-dark flex items-center justify-between text-text-secondary text-xs">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                  <span>89</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">comment</span>
                  <span>15</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">bar_chart</span>
                <span>1.1k views</span>
              </div>
            </div>
          </div>
        </div>
        {/*  <!--  Card 3 --> */}
        <div className="group relative flex flex-col rounded-xl bg-card-dark border border-border-dark hover:border-primary/50 hover:shadow-lg overflow-hidden cursor-pointer transition-all active:scale-[0.99]">
          <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-card-dark border border-border-dark text-text-secondary rounded-full p-1 shadow-lg">
              <span className="material-symbols-outlined text-[20px] block">radio_button_unchecked</span>
            </div>
          </div>
          <div className="p-5 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-full bg-cover bg-center" data-alt="Avatar of user Sarah J." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPyPV1FQkDzO8lz1uL06cvQ2Wtv04mBQqNYfh_znptznVozYSqW5toPgxEic7mT3GUPy1gy1G4dZXBu3EpA5QiP9gjcFBnWTeyKjKoyMgQyBhoG24OSyahX3fm8zl3NqK1-xh5xIMyABZaW5jtukFbzuhABdx1sjF5fBkPl9vaKSc13HJHIZ-cWZDtjGeMAS9wu77DnckavgxOhiqsZumR0MCl1I5IMZrNblVEKQqvp1IDcL9RaRW6ztRGp6PkZb5bWzAHUidmdks")' }}></div>
              <div className="flex flex-col">
                <p className="text-black text-sm font-bold">Sarah Jenkins</p>
                <p className="text-text-secondary text-xs">1 week ago • <span className="material-symbols-outlined text-[10px] inline align-middle">public</span></p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                Hiring Alert! 📢 We are looking for a Senior Product Designer to join our team. Remote friendly, great benefits...
              </p>
            </div>
            {/*  <!--  Media Preview --> */}
            <div className="w-full h-32 rounded-lg bg-cover bg-center mb-4 relative" data-alt="Laptop on a desk with coffee, representing remote work" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCyG98fdmori0zCHVwbrD1-Fj_iVEwIQ0zNdO2ShZOQjNN9x8CAF-_tLXu1bfO6tWv9xOBi8F-f1Rv6A4gE5HSi0LUKutRPAe7asLyglI1Zc85Ys1vl0ayOd3pU2KCj0CTXooOWLv805qOHMTmNRI7NCgw291ed3tKl0MWSnw6hOHGEuf1oCzQJ-plWh0csNmqcn0ZzPx0pEXImuSsJaGvv3GoT_mrLURzs7tu0Jzsjg7GQiQmNootGt4JHN_WUzM1nkpa9dI5_qlo")' }}>
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            </div>
            <div className="mt-auto pt-4 border-t border-border-dark flex items-center justify-between text-text-secondary text-xs">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                  <span>312</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">comment</span>
                  <span>56</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">bar_chart</span>
                <span>4.5k views</span>
              </div>
            </div>
          </div>
        </div>
        {/*  <!--  Card 4 --> */}
        <div className="group relative flex flex-col rounded-xl bg-card-dark border border-border-dark hover:border-primary/50 hover:shadow-lg overflow-hidden cursor-pointer transition-all active:scale-[0.99]">
          <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-card-dark border border-border-dark text-text-secondary rounded-full p-1 shadow-lg">
              <span className="material-symbols-outlined text-[20px] block">radio_button_unchecked</span>
            </div>
          </div>
          <div className="p-5 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-full bg-cover bg-center" data-alt="Avatar of user Sarah J." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLS4nvTX99s7EApNHHzUPsqPgXUPGSbfz5aZ0Zx9sbLUOyHLTPR6XZyPqEaKXqQwgJnslDCZ8mW-f9WeXSWI_gZ9YyQjE54fSYOIAJ2OUQUaoBdq_CU4qFDufdQwCgbQQtrGjq6jWHbKWrp4524vkKmw6_xnSH0CWO6FhfJMlFxCHlg76nSsDEEDGWWTyuOTuKjamgcTOJ7oU7EMOZbJOcMYkEWw4I01nlcV0P7mCAO6E_5hX9knPH5xzi6eh95jbvh_u0Rr0Q6Vs")' }}></div>
              <div className="flex flex-col">
                <p className="text-black text-sm font-bold">Sarah Jenkins</p>
                <p className="text-text-secondary text-xs">2 weeks ago • <span className="material-symbols-outlined text-[10px] inline align-middle">public</span></p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                Just attended the Global Tech Summit 2024. The insights on automation and machine learning were mind-blowing. Here are my key takeaways...
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-border-dark flex items-center justify-between text-text-secondary text-xs">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                  <span>156</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">comment</span>
                  <span>23</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">bar_chart</span>
                <span>2.1k views</span>
              </div>
            </div>
          </div>
        </div>
        {/*  <!--  Card 5 --> */}
        <div className="group relative flex flex-col rounded-xl bg-card-dark border border-border-dark hover:border-primary/50 hover:shadow-lg overflow-hidden cursor-pointer transition-all active:scale-[0.99]">
          <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-card-dark border border-border-dark text-text-secondary rounded-full p-1 shadow-lg">
              <span className="material-symbols-outlined text-[20px] block">radio_button_unchecked</span>
            </div>
          </div>
          <div className="p-5 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-full bg-cover bg-center" data-alt="Avatar of user Sarah J." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWCwEHb0ddFuI4VZfABAaolXtcGl1f-SqaxbI4ViNyRTnvaT0Cq_irJ_z_rmCQEG8n24mC4LhYg6U23-U2cNNgA-W-RLK59SULpdMu6j5DdeufifVcWPpvFRR2gB0oIekRiohBZ_vi9cThVdIlnEBH5dHuFEaAd7-_94NEis90JLj8_VAqv4ns2-iucDKMJpaDnaJ7sKoWZkKunUh_TXv-qt2Ucmcm-eidHeXS1Iq44qdjjM0-u0oPthbjG0EVY9Blw44zK4QEZNU")' }}></div>
              <div className="flex flex-col">
                <p className="text-black text-sm font-bold">Sarah Jenkins</p>
                <p className="text-text-secondary text-xs">3 weeks ago • <span className="material-symbols-outlined text-[10px] inline align-middle">public</span></p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                Can we talk about burnout? It's real and it affects high performers the most. Let's discuss strategies to prevent it.
              </p>
            </div>
            {/*  <!--  Media Preview --> */}
            <div className="w-full h-32 rounded-lg bg-cover bg-center mb-4 relative" data-alt="Calm nature scene with mountains reflecting in water" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiRqorgz6AHEExog78PnP_j8gPuva5P-sU127RfB5FlJzZtuIsbkU7HyRqRJ2N4DEIzrZE4lofreui14BaFhlH7bUATkudUy75YeYRrUxq16MsvDyrtx9ES6gL1Gmu2TsGxT6YsAS0hdwPa3kvvT5gx844fNH46vXyOCj5ZmaHgllT4v3Xwp1DrD9WDI6foaFGHb9VaQpFKbDANpFtebM4sPRe60rcM5oYaM2v5S4vpGro9VKx56u6DHkcBq6_fcUqNjVhsmcrY48")' }}>
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            </div>
            <div className="mt-auto pt-4 border-t border-border-dark flex items-center justify-between text-text-secondary text-xs">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                  <span>450</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">comment</span>
                  <span>112</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">bar_chart</span>
                <span>8.4k views</span>
              </div>
            </div>
          </div>
        </div>
        {/*  <!--  Card 6 --> */}
        <div className="group relative flex flex-col rounded-xl bg-card-dark border border-border-dark hover:border-primary/50 hover:shadow-lg overflow-hidden cursor-pointer transition-all active:scale-[0.99]">
          <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-card-dark border border-border-dark text-text-secondary rounded-full p-1 shadow-lg">
              <span className="material-symbols-outlined text-[20px] block">radio_button_unchecked</span>
            </div>
          </div>
          <div className="p-5 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-full bg-cover bg-center" data-alt="Avatar of user Sarah J." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVE9bsbu65PfrsBxYY5fD2qaBbf8JTwWg3qqGS7Xdguf4xsGaWVvYVounPz9HlX8K5NbwYcYlvn2vS0Kgx4rOSDdextxJYZhpzwAVf1d_vXxvzS3phCaTzOu1oBdufcpBACaoK3QARiGmv4SFVyoOoqwtQywSytX2FizM-MHzGBQtVyn7ChHRMU2CkhzpQtXAQO2StYJbHStGD6yC9AypbCjaW9H9X-9LAyMs_9aoi6kW9HLMOmWFAA4DYp2rN4D-mCYJuT4yzSik")' }}></div>
              <div className="flex flex-col">
                <p className="text-black text-sm font-bold">Sarah Jenkins</p>
                <p className="text-text-secondary text-xs">1 month ago • <span className="material-symbols-outlined text-[10px] inline align-middle">public</span></p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                Throwback to when we started this journey 5 years ago. Look at how much has changed! Grateful for the team and our customers.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-border-dark flex items-center justify-between text-text-secondary text-xs">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                  <span>189</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">comment</span>
                  <span>28</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">bar_chart</span>
                <span>2.8k views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 flex justify-center z-30 pointer-events-none">
        <div className="pointer-events-auto bg-card-dark bg-white border border-border-dark rounded-2xl shadow-2xl p-4 flex items-center justify-between gap-8 max-w-[600px] w-full animate-in slide-in-from-bottom-5 duration-500">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-cover bg-center shrink-0 border border-border-dark" data-alt="Selected post thumbnail abstract technology" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBW_UUaaF1fufDBQJtY8zIBcIfZIZKL3AFi5BXMHIIhrvgGq78lrrgywYAjmskAOr37F09rYuZ_M0oIB_uQzzl8l12sro_VUtcZM9QPUTnqqM3KC0mXdokhRBe6sJPf1uyQ_nqmPCA0CgrYK8cxhh_va79etHKEcm7Ir4bE6F0HU5HldkLhz5YLwwdbeu1mq1P668aOrcveH1PRbD4y-ZtOP_XoOrIWyKfze8Jd-FjPo88cN8qDdpPyTcmli-Yc6WVgnbx-s7GeRQE")'}}></div>
            <div className="flex flex-col">
              <p className="text-black text-sm font-bold truncate max-w-[200px]">Excited to announce that...</p>
              <p className="text-text-secondary text-xs">Selected Post • 2 days ago</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-6 rounded-lg transition-all shadow-lg shadow-primary/20">
            <span>Continue Setup</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
