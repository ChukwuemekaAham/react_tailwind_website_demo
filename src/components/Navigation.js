
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  return (
    <Popover className="relative bg-blue-200 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <svg
            class="h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 842 168"
            role="img"
          >
            <path
              class="st3"
              fill="#2a3b47"
              d="M232 31.5l-.3.1v44.7h-42.4V31.6l-.3-.1c-6.3-1.3-12.5-1.3-18.7 
                    0l-.3.1v102.8l.3.1c3.1.6 6.2 1 9.3 1s6.2-.3 9.4-1l.3-.1V92.7h42.4v41.7l.3.1c6.2 1.3 
                    12.5 1.3 18.7 0l.3-.1V31.6l-.3-.1c-6.3-1.2-12.5-1.2-18.7 0zM297.7 
                    60.4c-22.2 0-35.4 14-35.4 37.5 0 12.2 2.8 21.9 8.4 28.6 6.1 7.3 15.2 
                    11 27.3 11 20.5 0 31-12.2 32.3-24.3v-.3l-.3-.1c-5.2-1.7-10-2.1-15.7-1.3h-.2v.2c-1.2 
                    7.2-7.2 11.5-15.9 11.5-12.2 0-18.2-6.7-18.4-20.5h51.6v-.3c1.5-13.6-1.2-24.6-7.8-32.1-6.1-6.4-15-9.9-25.9-9.9zm-.2 
                    13.3c5.1 0 9.4 1.6 12.3 4.7 3 3.2 4.5 8 4.2 13.7h-34.2c.3-11.7 6.8-18.4 17.7-18.4zM343.9
                     31.5l-.3.1v102.8l.3.1c2.9.6 5.8 1 8.8 1 2.9 0 5.9-.3 8.8-1l.3-.1V31.6l-.3-.1c-5.8-1.3-11.7-1.2-17.6
                      0zM412.4 60.4c-7.7 0-15.8 3-23.5 8.7l-1.1-5.4-.2-.1c-4.4-1.3-8-1.3-12.3 0l-.2.1V166l.3.1c2.9.6 5.8 1
                       8.8 1s5.9-.3 8.8-1l.3-.1v-34.2c6.1 3.9 12.6 5.7 19.9 5.7 20.2 0 32.3-14.3 
                       32.3-38.4-.1-24.5-12.1-38.7-33.1-38.7zM393 80.7c5.4-3.7 10.4-5.4 15.8-5.4 
                       12.3 0 19 8.5 19 24.1 0 15.3-6.6 23.4-19.2 23.4-5.4 0-10.5-1.7-15.6-5.3V80.7zM522.6 
                       79.1c-3.1-1.2-5.9-2.2-8.6-3.1-14-5-22.4-8-22.6-15.6-.1-3.5 1-6.5 3.4-9 3.5-3.6 9.4-5.5
                        16.6-5.5 7.1 0 12.6 1.9 15.9 5.4 2.8 3 4 7.1 3.7 12.2v.3l.3.1c6.1 1.2 12.2 1.1 
                        18.8-.4l.3-.1v-.3c.4-8.6-2.2-16.1-7.5-21.7-6.6-7-17.2-10.7-30.6-10.8h-.4c-24.9 
                        0-39.9 11.1-40.1 29.7-.1 18.5 16.9 24.7 27.1 28.3l1.5.6c3.4 1.2 6.6 2.3 9.4 3.3 
                        13.8 4.8 22.1 7.7 22.4 15 .1 3.8-1 6.9-3.3 9.3-3.3 3.4-9.1 5.1-16.8 
                        5-8.5 0-15-2.2-18.7-6.2-2.7-3-3.8-6.8-3.4-11.4v-.3l-.3-.1c-6.2-1.2-12.5-1.1-18.7.3l-.2.1v.3c-.5 
                        8.3 2 15.7 7.4 21.4 7.2 7.7 19 11.7 34.2 11.6 14.9 0 39.4-4 39.6-30-.3-17.3-15.1-22.9-29.4-28.4zM596.7 
                        75.3c12.3 0 15.2 8 15.8 12.7v.3h.3c5.7.9 11.1.5 16.3-1l.3-.1v-.3c-.5-7.2-3.6-13.7-8.7-18.4-5.8-5.3-14.1-8.2-23.9-8.2-23.4 
                        0-36.3 13.7-36.3 38.6 0 24.8 12.8 38.5 36 38.5 10 0 18.4-2.9 24.3-8.4 4.9-4.6 
                        7.9-10.8 8.5-17.5v-.3l-.3-.1c-4.9-1.7-10.3-2-16.2-1h-.2v.2c-1.6 11.2-12.5 12-15.8 
                        12-12.6 0-18.5-7.5-18.5-23.6-.1-15.9 5.8-23.4 18.4-23.4zM673.7 60.4c-23 0-35.7 
                        13.7-35.7 38.6 0 24.8 12.7 38.5 35.7 38.5 23 0 35.7-13.7 35.7-38.5 0-24.9-12.7-38.6-35.7-38.6zM692 
                        99.1c0 15.9-6 23.6-18.3 23.6s-18.3-7.7-18.3-23.6c0-16.2 5.8-23.8 18.3-23.8 12.3 0 18.3 7.8 
                        18.3 23.8zM767 63.7l-.3.1V115c-5.8 5-11.1 7.2-17.2 7.2-8.6 0-12.3-4.9-12.3-16.5v-42l-.3-.1c-5.8-1.4-11.7-1.4-17.6 0l-.3.1v46.1c0 
                        17.5 9.4 27.6 25.9 27.6 8.8 0 16.5-3.4 24.8-11l1.7 8 .2.1c4.2 1.1 8.6 1.1 12.8 
                        0l.3-.1V63.7l-.3-.1c-5.6-1.4-11.5-1.4-17.4.1zM840.1 120.7l-.1-.3-.3.1c-7 1.6-11.1 
                        1.5-13.5-.4-2-1.6-2.9-4.4-2.9-8.8V78.5h14.2l.1-.3c1-4.8 1-9.7 0-14.6l-.1-.3h-14.2V43.9l-.3-.1c-5.8-1.3-11.7-1.3-17.5 0l-.3.1.1 
                        19.4h-9l-.1.3c-1.1 4.8-1.1 9.8 0 14.6l.1.3h9l.1 31.5c0 8.8.5 17.7 6.6 22.8 3.3 2.7 
                        8.1 4.1 14.3 4.1 3.8 0 8.2-.5 13.3-1.5h.2l.1-.2c1.4-4.7 1.5-9.6.2-14.5z"
            />

            <path
              class="st1"
              fill="#1292ee"
              d="M10.9 97.2l48.6-48.6c6.3-6.2 10.2-14.9 10.2-24.4 0-9.4-3.8-18-9.9-24.2L11.2 48.6C4.9 54.8 1 63.5 1 73c0 9.5 3.8 18 9.9 24.2zM128.6 68.8L80 117.4c-6.3 6.2-10.2 14.9-10.2 24.4 0 9.4 3.8 18 9.9 24.2l48.6-48.6c6.3-6.2 10.2-14.9 10.2-24.4 0-9.5-3.8-18-9.9-24.2zM128.3 48.7c6.3-6.2 10.2-14.9 10.2-24.4 0-9.4-3.8-18-9.9-24.2L11.2 117.4C4.9 123.7 1 132.3 1 141.9c0 9.4 3.8 18 9.9 24.2L128.3 48.7z"
            />
          </svg>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-700',
                      'group inline-flex items-center rounded-md text-sm font-light hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                    )}
                  >
                    <span>Product</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-700' : 'text-gray-700',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-700',
                      'group inline-flex items-center rounded-md text-sm font-light hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                    )}
                  >
                    <span>Resources</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-700' : 'text-gray-700',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-base font-medium text-gray-500">Recent Posts</h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="truncate text-base">
                                  <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                              View all posts
                              <span aria-hidden="true"> &rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            
            <a href="#" className="text-sm font-light text-gray-700 hover:text-gray-900">
              Education
            </a>
            <a href="#" className="text-sm font-light text-gray-700 hover:text-gray-900">
              Pricing
            </a>

            
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-sm font-light text-gray-700 hover:text-gray-900">
              Log in
            </a>
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded border border-transparent px-4 py-3 shadow-sm text-sm text-white font-light bg-blue-500 rounded hover:bg-blue-400"
            >
              Free Trial
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Free Trial
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Log in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
