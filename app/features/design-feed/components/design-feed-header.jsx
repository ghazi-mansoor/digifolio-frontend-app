const tabs = [
    { name: 'Discover', href: '#', current: true },
    { name: 'Web Design', href: '#', current: false },
    { name: 'Mobile', href: '#', current: false },
    { name: 'Print', href: '#', current: false },
    { name: 'Product Design', href: '#', current: false },
    { name: 'Typography', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DesignFeedHeader() {
    return (
        <div className="border-b border-gray-200 pb-5 sm:pb-0">
            <h3 className="text-2xl font-bold leading-7 text-gray-900">Design Feed</h3>
            <div className="mt-6 sm:mt-7">
                <div className="sm:hidden">
                    <label htmlFor="current-tab" className="sr-only">
                        Select a tab
                    </label>
                    <select
                        id="current-tab"
                        name="current-tab"
                        className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                        defaultValue={tabs.find((tab) => tab.current).name}
                    >
                        {tabs.map((tab) => (
                            <option key={tab.name}>{tab.name}</option>
                        ))}
                    </select>
                </div>
                <div className="hidden sm:block">
                    <nav className="-mb-px flex space-x-8">
                        {tabs.map((tab) => (
                            <a
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    tab.current
                                        ? 'border-pink-500 text-pink-600'
                                        : 'border-transparent text-gray-500 hover:border-pink-300 hover:text-gray-700',
                                    'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium'
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}
