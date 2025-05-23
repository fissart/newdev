/* This example requires Tailwind CSS v2.0+ */
import logo from '../logo.png';
// import { Fragment } from 'react'
// import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ChatIcon,
  ViewGridIcon,
  XIcon
} from '@heroicons/react/outline'
// import { ChevronDownIcon } from '@heroicons/react/solid'
// import { Button } from 'antd';

// const features = [
//   {
//     name: 'Analytics',
//     href: '#',
//     description: 'Get a better understanding of where your traffic is coming from.',
//     icon: ChartBarIcon
//   },
//   {
//     name: 'Engagement',
//     href: '#',
//     description: 'Speak directly to your customers in a more meaningful way.',
//     icon: CursorClickIcon
//   },
//   { name: 'Security', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon },
//   {
//     name: 'Integrations',
//     href: '#',
//     description: "Connect with third-party tools that you're already using.",
//     icon: ViewGridIcon
//   },
//   {
//     name: 'Automations',
//     href: '#',
//     description: 'Build strategic funnels that will drive your customers to convert',
//     icon: RefreshIcon
//   }
// ]
// const callsToAction = [
//   { name: 'Watch Demo', href: '#', icon: PlayIcon },
//   { name: 'Contact Sales', href: '#', icon: PhoneIcon }
// ]
// const resources = [
//   {
//     name: 'Help Center',
//     description: 'Get all of your questions answered in our forums or contact support.',
//     href: '#',
//     icon: SupportIcon
//   },
//   {
//     name: 'Guides',
//     description: 'Learn how to maximize our platform to get the most out of it.',
//     href: '#',
//     icon: BookmarkAltIcon
//   },
//   {
//     name: 'Events',
//     description: 'See what meet-ups and other events we might be planning near you.',
//     href: '#',
//     icon: CalendarIcon
//   },
//   { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon }
// ]
// const recentPosts = [
//   { id: 1, name: 'Boost your conversion rate', href: '#' },
//   { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
//   { id: 3, name: 'Improve your customer experience', href: '#' }
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Example() {
  return (
    <div>
      {/* <Popover className="relative bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 px-6">
              <div className="flex justify-between items-center py-6">
                <div className="flex justify-start">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img className="h-8 w-auto h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                  </a>
                </div>
                <div className="-mr-2 -my-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden space-x-10">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          )}>
                          <span>Solutions</span>
                          <ChevronDownIcon
                            className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1">
                          <Popover.Panel static className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md px-0">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 gap-8 p-8">
                                {features.map((item) => (
                                  <a key={item.name} href={item.href} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">{item.name}</p>
                                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                              <div className="px-5 py-5 bg-gray-50 space-y-6 flex space-y-0 space-x-10 px-8">
                                {callsToAction.map((item) => (
                                  <div key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                                      <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
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

                  <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Pricing
                  </a>
                  <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Docs
                  </a>

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          )}>
                          <span>More</span>
                          <ChevronDownIcon
                            className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1">
                          <Popover.Panel
                            static
                            className="absolute left-1/2 z-10 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md px-0">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 gap-8 p-8">
                                {resources.map((item) => (
                                  <a key={item.name} href={item.href} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">{item.name}</p>
                                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                              <div className="px-5 py-5 bg-gray-50 px-8 py-8">
                                <div>
                                  <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
                                  <ul className="mt-4 space-y-4">
                                    {recentPosts.map((item) => (
                                      <li key={item.id} className="text-base truncate">
                                        <a href={item.href} className="font-medium text-gray-900 hover:text-gray-700">
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mt-5 text-sm">
                                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    {' '}
                                    View all posts <span aria-hidden="true">&rarr;</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </Popover.Group>
                <div className="hidden items-center justify-end">
                  <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                    Sign in
                  </a>
                  <a
                    href="#"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    Sign up
                  </a>
                </div>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Popover.Panel focus static className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {features.map((item) => (
                          <a key={item.name} href={item.href} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                        Pricing
                      </a>

                      <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                        Docs
                      </a>
                      {resources.map((item) => (
                        <a key={item.name} href={item.href} className="text-base font-medium text-gray-900 hover:text-gray-700">
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div>
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        Sign up
                      </a>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?
                        <a href="#" className="text-indigo-600 hover:text-indigo-500">
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover> */}

      <div style={{ textAlign: "center" }}>
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                  {/* <img class="img-fluid rounded w-50" [src]="src" (error)="onImgError($event)"
									alt="img" /> */}
                </div>
                <p className="">
                  ESCUELA SUPERIOR DE FORMACIÓN ARTÍSTICA
                </p>
                <p className="">
                  "Felipe Guamán Poma de Ayala"
                </p>

                <div></div>
              </div>

              <div className="">

                <div>
                  <i className="text-secondary fa fa-map-marker fa-2x"></i>
                  <p>Ayacucho</p>
                </div>
                <div>
                  <i className="text-secondary fa fa-phone fa-2x"></i>
                  <p>https://www.esfapa.edu.pe</p>
                </div>
                <p>
                  Teléfono: 066-287499
                </p>
                <div>
                  <p className="text-info">©Copyright ESFA Ayacucho 2025</p>
                </div>
                <div>
                  <i className="text-secondary fa fa-envelope fa-2x"></i>
                  <p>
                    <a className="text-secondary" href="wwwww"></a>
                  </p>
                </div>
              </div>

              <div className="container text-center p-1 col-md-6 col-lg-4 col-xl-4">
                <p className="text-center">
                  Jr. Mariano Melgar Nº 398, Distrito Jesús Nazareno Huamanga, Ayacucho
                </p>

                <a className="text-dark" style={{ margin: ".1cm;" }} target="_blank"
                  href="https://api.whatsapp.com/send?phone=+51 966999215&text=Hola%20bienvenido">
                  <ChatIcon style={{ width: ".9cm", color: "orange" }} />
                </a>
                <a className="text-dark" style={{ margin: ".1cm;" }} target="_blank"
                  href="https://m.me/bellasartes.ayacucho">
                  <PhoneIcon style={{ width: ".9cm", color: "orange" }} />
                </a>
                <a className="text-dark" style={{ margin: ".1cm;" }} target="_blank"
                  href="https://bellasartes.blogspot.com">
                  <ShieldCheckIcon style={{ width: ".9cm", color: "orange" }} />
                </a>
                <a className="text-dark" style={{ margin: ".1cm;" }} target="_blank"
                  href="https://web.facebook.com/bellasartes.ayacucho">
                  <PlayIcon style={{ width: ".9cm", color: "orange" }} />
                </a>
                <a className="text-dark" style={{ margin: ".1cm;" }} target="_blank"
                  href="https://instagram.com/bellasartes.ayacucho">
                  <RefreshIcon style={{ width: ".9cm", color: "orange" }} />
                </a>
                <a className="text-dark" style={{ margin: ".1cm;" }} target="_blank"
                  href="https://www.tiktok.com/@bellasartes.ayacucho">
                  <CursorClickIcon style={{ width: ".9cm", color: "orange" }} />
                </a>
                <a className="text-dark" style={{ margin: ".1cm;" }} target="_blank"
                  href="https://www.youtube.com/channel/UCkYf1NyZ1kUl3965WgeL6rw">
                  <BookmarkAltIcon style={{ width: ".9cm", color: "orange" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <header style={{
          textAlign: 'center', display: 'flex',
          justifyContent: 'center', alignItems: 'center'
        }} >
          <img src={logo} className="App-logowww" alt="logo" />
        </header>
        <div className="">
          <h1 className="">
            <span className="">Escuela Superior de Formación
              Artística Felipe Guamán Poma de Ayala</span> <span className="">ESFAPA Ayacucho</span>
          </h1>
          <p className="">
            Escuela Superior de Formación Artística pública de formación profesional en artes visuales desarrollado en un plan de estudios de 5 años ubicado en la ciudad de Ayacucho.
          </p>
          <div style={{ padding: '.1cm', textAlign: 'center', margin: 'auto', display: 'block' }}>
            <div className="">
              <buton><a
                href="/nosotros" Target="_blank"
                className="">
                Saber más
              </a></buton>
            </div>
            {/* <div className="">
                <a
                  href="#"
                  className="">
                  Live demo
                </a>
              </div> */}
          </div>
        </div>
        <div className="">
          <img style={{ width: '100%' }}
            src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4no9_FAqbd4m94ZISS81vJ20-4qQBHKexnw9dpOFZVf6av4LKGVPnExUu8Z5K5j5PRpCUfHG9hF4IqibrUBVohOe6zvDwfxKnY_m88Nb0Fg0fRzBd7AKoqimQ__Q47hsmPk3LAN-=s680-w680-h510"
            alt=""
          />
        </div>
        <div className="">
          <p className="">
            Escuela Superior de Formación Artística pública de formación profesional en artes visuales desarrollado en un plan de estudios de 5 años ubicado en la ciudad de Ayacucho.
          </p>
          <div className="">
            <img style={{ width: '100%' }}
              src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4noZWRNgM9PMwgOkKmW2d8SAlOA6XcE7e2vZxBe4XFgujzc-GmRLP82Xqty1eQBjIjn2OrDQlRdvdvp4JrAiyGaME4G7kwKWDfSYKja1hN-MxzqEQ7LK5YrUPFIJBCSAFOcJnhcU=s680-w680-h510"
              alt=""
            />
          </div>
        </div>
        <iframe style={{ width: "100%", height: "12cm", frameborder: "0cm", scrolling: "no" }}
          src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=es&amp;q=+(Escuela%20de%20Bellas%20Artes%20Felipe%20Guam%C3%A1n%20Poma%20de%20Ayala-Ayacucho)&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
            href="https://www.gps.ie/car-satnav-gps/">Car GPS</a></iframe>
        <iframe style={{ width: "100%", height: "15cm", frameborder: "0cm", scrolling: "no" }}
          src="https://www.google.com/maps/embed?pb=!4v1655850799758!6m8!1m7!1sGm3v-xYcR1tj1gz95RrkYg!2m2!1d-13.15635415471263!2d-74.2180525291301!3f124.85298126566764!4f2.1996870284465047!5f0.7820865974627469"
          allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    </div>
  )
}
