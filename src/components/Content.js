import React from 'react';


const Content = () => {
  return (
    <div>
        <div class="mt-24 p-6">
            <div class="w-full py-8">
                <h3 class="w-full lg:w-1/3 m-auto text-center text-2xl md:text-3xl text-blue-900">Help Scout empowers customer-centric businesses with tools that make every interaction more human and helpful.</h3>
                <hr class="my-8 border-blue-900 w-1/12 mx-auto" />
            </div>
            <div class="flex flex-col-reverse md:flex-row m-auto max-w-8xl items-center justify-center">
                <div class="w-full md:w-2/3">
                    <img src="/img/1.png" />
                </div>
                <div class="mt-6 md:mt-0 w-full md:w-1/3">
                    <p class="text-2xl text-gray-500 font-light">Messaging</p>
                    <p class="mt-4 text-3xl text-blue-900">Look and feel matters</p>
                    <p class="py-6 text-gray-600">Replace robo-emails and ticket numbers with emails that were clearly sent by a real person. Fast, friendly, and above all, customer-first.</p>
                    <a class="mt-4 text-blue-500" href="#">More about the help desk ></a>
                </div>
            </div>
            <div class="mt-12 md:mt-32 flex flex-col md:flex-row m-auto max-w-8xl items-top justify-center">
                <div class="w-full md:w-1/3">
                    <div>
                        <p class="text-2xl text-gray-500 font-light">Docs</p>
                        <p class="mt-4 text-3xl text-blue-900">Make impressive help docs in minutes</p>
                        <p class="py-6 text-gray-600">Anyone on your team can build out articles that answer common customer questions. Make Docs public or private—it’s all in your control.</p>
                        <a class="mt-4 text-blue-500" href="#">More about Docs ></a>
                    </div>
                    <div class="hidden md:block w-2/3 mt-20">
                        <img class="" src="/img/3.jpg" />
                    </div>
                </div>
                <div class="mt-12 md:mt-0 md:ml-12 relative w-full md:w-2/3 px-8 pb-24">
                    <img class="absolute bottom-0 left-0 h-64 z-0" src="/img/dots.jpg" />
                    <img class="relative z-20 shadow md:mx-10" src="/img/2.png" />
                </div>
            </div>


            <div class="mt-12 md:mt-32 flex flex-col-reverse md:flex-row m-auto max-w-8xl items-top justify-center">
                <div class="mt-12 md:mt-0 md:mr-12 relative w-full md:w-2/3 md:pb-24">
                    <img class="relative shadow" src="/img/graph.jpg" />
                </div>
                <div class="w-full md:w-1/3">
                    <div>
                        <p class="text-2xl text-gray-500 font-light">Reporting</p>
                        <p class="mt-4 text-3xl text-blue-900">Look smarter in meetings</p>
                        <p class="py-6 text-gray-600">Intuitive, built-in reports make for valuable “aha” moments with your team and your boss. No coding or customizations required.</p>
                        <a class="mt-4 text-blue-500" href="#">More about Reporting ></a>
                    </div>
                    <div class="hidden lg:block w-2/3 mt-20 mx-auto">
                        <img class="h-48" src="/img/bag.png" />
                    </div>
                </div>
            </div>
            <div class="mt-12 mx-auto w-full lg:w-2/5 text-center">
                <p class="text-xl text-gray-600 font-light">Integrations</p>
                <p class="mt-4 text-3xl text-blue-900 font-semibold">Connect Help Scout with all the things</p>
                <p class="py-6 text-gray-600">Explore 50+ integrations that make your day-to-day workflow more efficient and familiar. Our extensive developer tools might also strike your fan</p>
            </div>

            <div class="mt-6 flex flex-wrap max-w-8xl px-8 justify-end m-auto">
                <div class="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
                    <div class="w-full h-full flex justify-center items-center cursor-pointer hover:bg-gray-200">
                        <img class="" src="/img/slack.png" />
                    </div>
                </div>
                <div class="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
                    <div class="w-full h-full flex relative justify-center items-center cursor-pointer hover:bg-gray-200">
                        <p class="absolute top-0 left-0 p-1 rounded-tl-lg rounded-br-lg uppercase text-white text-xs tracking-wide font-semibold bg-indigo-300">plus</p>
                        <img class="" src="/img/hubspot.png" />
                    </div>
                </div>
                <div class="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
                    <div class="w-full h-full flex justify-center items-center cursor-pointer hover:bg-gray-200">
                        <img class="" src="/img/mailchimp.png" />
                    </div>
                </div>
                <div class="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
                    <div class="w-full h-full flex relative justify-center items-center cursor-pointer hover:bg-gray-200">
                        <p class="absolute top-0 left-0 p-1 rounded-tl-lg rounded-br-lg uppercase text-white text-xs tracking-wide font-semibold bg-indigo-300">plus</p>
                        <img class="" src="/img/salesforce.png" />
                    </div>
                </div>
                <div class="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
                    <div class="w-full h-full flex justify-center items-center cursor-pointer hover:bg-gray-200">
                        <img class="" src="/img/woocommerce.png" />
                    </div>
                </div>
                <div class="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
                    <div class="w-full h-full flex relative justify-center items-center cursor-pointer hover:bg-gray-200">
                        <p class="absolute top-0 left-0 p-1 rounded-tl-lg rounded-br-lg uppercase text-white text-xs tracking-wide font-semibold bg-indigo-300">plus</p>
                        <img class="" src="/img/jira.png" />
                    </div>
                </div>
                <div class="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
                    <div class="w-full h-full flex justify-center items-center cursor-pointer hover:bg-gray-200">
                        <img class="" src="/img/shopify.png" />
                    </div>
                </div>
                <div class="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
                    <div class="w-full h-full flex justify-center items-center cursor-pointer hover:bg-gray-200">
                        <p class="text-sm text-blue-500">View all integrations</p>
                    </div>
                </div>
            </div>
    <div class="mt-24 flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-8xl mx-auto">
        <div class="w-full md:w-1/2 p-4">
            <div class="shadow-lg rounded overflow-hidden">
                <img class="" src="/img/customer.png" />
                <div class="bg-white p-12">
                    <p class="font-light text-xl italic font-gray-800">"I'm not sure how I would be able to do support - at Zapier or anywhere else - without Help Scout."</p>
                    <p class="mt-4 font-light text-sm text-gray-500">Hoon, Customer Support Pro</p>
                    <p class="mt-1 font-semibold text-sm text-gray-900">Zapier</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center w-full md:w-1/2 p-2">
            <div class="flex flex-col justify-between w-full md:w-3/5">
                <div class="flex flex-col items-center md:items-start">
                    <h3 class="text-center md:text-left text-blue-900 font-semibold text-3xl">Trusted by more than 9,000 businesses in 140 countries.</h3>
                    <button class="mt-4 rounded border-2 border-gray-400 hover:border-blue-500 text-md font-semibold text-blue-500 py-3 px-4">Meet out customers</button>
                </div>
                <div class="mt-6 md:mt-12 flex flex-wrap">
                    <img class="w-1/3 py-2"  src="/img/customer-logos/grubhub.png" />
                    <img class="w-1/3 py-2"  src="/img/customer-logos/trello.png" />
                    <img class="w-1/3 py-2"  src="/img/customer-logos/pocket.png" />
                    <img class="w-1/3 py-2"  src="/img/customer-logos/buffer.png" />
                    <img class="w-1/3 py-2"  src="/img/customer-logos/tuftandneedle.png" />
                    <img class="w-1/3 py-2"  src="/img/customer-logos/tradesy.png" />
                </div>
            </div>
        </div>
    </div>
        </div>

        <div class="p-6 mt-12 md:mt-24 flex justify-center w-full bg-hero">
            <div class="flex flex-col items-center w-full max-w-8xl">
                <div class="flex flex-col justify-center">
                    <h3 class="text-blue-900 font-semibold text-center text-3xl">Our people make the difference.</h3>
                    <p class="mt-6 text-gray-600 text-lg text-center leading-normal font-light">We’re an extension of your customer service team, and all of our resources are free</p>			
                </div>
                <div class="mt-12 flex flex-col lg:flex-row w-full">
                    <div class="w-full lg:w-2/5 flex flex-col justify-center">
                        <div class="flex items-center">
                            <div class="h-32 w-32 p-4">
                                <img src="/img/trophy.jpg" />
                            </div>
                            <div class="flex flex-col">
                                <p class="text-lg text-blue-500">World class 24x6 Support</p>
                                <p class="mt-4 text-gray-500">These friendly and knowledgeable folks are available via email and chat.</p>
                            </div>
                        </div>
                        <div class="mt-6 flex items-center">
                            <div class="h-32 w-32 p-4">
                                <img src="/img/laptop.jpg" />
                            </div>
                            <div class="flex flex-col">
                                <p class="text-lg text-blue-500">Training & Classes</p>
                                <p class="mt-4 text-gray-500">Weekly resources designed to help you get the most out of Help Scout.</p>
                            </div>
                        </div>
                        <div class="mt-6 flex items-center">
                            <div class="h-32 w-32 p-4">
                                <img src="/img/books.jpg" />
                            </div>
                            <div class="flex flex-col">
                                <p class="text-lg text-blue-500">Education from HelpU</p>
                                <p class="mt-4 text-gray-500">We’ll teach your team how to master the craft of customer service.</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-3/5 flex justify-center lg:justify-end">
                        <img src="/img/people.jpg" />
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-12 md:mt-32 lg:mt-12 w-full lg:w-2/5 m-auto flex flex-col items-center bg-white p-10">
            <h3 class="text-blue-900 font-semibold text-center text-3xl">Get started with Help Scout</h3>
            <p class="mt-6 text-gray-600 text-lg text-center leading-normal font-light">A better experience for your customers, fewer headaches for your team.
            <br />You'll be set up in minutes.</p>
            <div class="mt-6 flex flex-col md:flex-row w-full md:px-8">
                <input class="flex flex-grow px-4 py-2 rounded text-gray-500 border border-gray-500" placeholder="Email Address" />
                <button class="mt-2 md:mt-0 md:ml-2 bg-blue-500 shadow-lg rounded text-white px-4 py-3">Get Started</button>
            </div>
            <p class="mt-6 text-gray-500">See Help Scout in action.<a class="ml-2 text-blue-500" href="#">Get a Demo</a></p>
        </div>
        <div class="flex justify-center">
            <div class="flex justify-end w-full max-w-8xl">
                <img class="-mb-4" src="/img/reading.png"/>
            </div>
        </div>

    </div>

    
   
  );
}

export default Content;
