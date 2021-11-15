import React from 'react';


const Footer = () => {
  return (
    <footer class="flex justify-center w-full bg-gray-900 px-6">
		<div class="w-full mt-12 max-w-8xl">
			<div class="flex flex-col md:flex-row text-center md:text-left">
				<div class="flex flex-col items-center md:items-start w-full md:w-2/6 border-b pb-8 md:pb-0 md:border-none border-gray-600">
					<a href="#">
						<svg class="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.5 166" role="img">
                            <path fill="#1292ee" class="logo-mark--st0" d="M9.9 97.2l48.6-48.6c6.3-6.2 10.2-14.9 10.2-24.4 0-9.4-3.8-18-9.9-24.2L10.2 48.6C3.9 54.8 0 63.5 0 73c0 9.5 3.8 18 9.9 24.2zM127.6 68.8L79 117.4c-6.3 6.2-10.2 14.9-10.2 24.4 0 9.4 3.8 18 9.9 24.2l48.6-48.6c6.3-6.2 10.2-14.9 10.2-24.4 0-9.5-3.8-18-9.9-24.2zM127.3 48.7s0-.1 0 0c6.3-6.2 10.2-14.9 10.2-24.4 0-9.4-3.8-18-9.9-24.2L10.2 117.4C3.9 123.6 0 132.3 0 141.8c0 9.4 3.8 18 9.9 24.2L127.3 48.7z"></path></svg>
					</a>
					<p class="mt-2 text-2xl font-light text-gray-100">Tools for the world's most customer-centric businesses</p>
					<img class="hidden md:block my-10 w-16" src="/img/certified.png"/>
				</div>
				<div class="flex flex-col w-full md:w-1/6 md:ml-8">
					<p class="mt-6 md:mt-0 text-md text-white">Features</p>
					<a href="#" class="mt-4 text-sm font-light text-gray-600 hover:text-gray-300">Help Desk</a>
					<a href="#" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Knowledge Base</a>
					<a href="#" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Live Chat</a>
					<a href="#" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Integrations</a>
					<a href="#" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Reports</a>
					<a href="#" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">iOS & Android</a>
					<a href="#" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Messages <span class="ml-1 px-1 font-semibold text-white text-xs bg-blue-500 rounded">COMING SOON</span></a>
					<a href="#" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">More Features</a>
				</div>
				<div class="flex flex-col w-full md:w-1/6 md:ml-8">
					<p class="mt-6 md:mt-0 text-md text-white">Learn</p>
					<a href="#" class="mt-4 text-sm font-light text-gray-600 hover:text-gray-300">Customer Support Skills</a>
					<a href="#" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Designing Knowledge Bases</a>
					<a href="#" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Chat & Messaging</a>
					<a href="#" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Customer Support Benchmarks</a>
				</div>
				<div class="flex flex-col w-full md:w-1/6 md:ml-8">
					<p class="mt-6 md:mt-0 text-md text-white">About Us</p>
					<a href="#" class="mt-4 text-sm font-light text-gray-600 hover:text-gray-300">Careers</a>
					<a href="#" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Help Scout for Good</a>
					<a href="#" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Brand Handbook</a>
					<a href="#" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Terms & Privacy</a>
				</div>
				<div class="flex flex-col w-full md:w-1/6 md:ml-8">
					<p class="mt-6 md:mt-0 text-md text-white">Get Help</p>
					<a href="#" class="mt-4 text-sm font-light text-gray-600 hover:text-gray-300">Developers </a>
					<a href="#" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Help Docs </a>
					<a href="#" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Free Training</a>
					<a href="#" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Contact Sales</a>
					<a href="#" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Status<span class="ml-1 px-1 font-semibold text-gray-400 text-xs bg-gray-600 rounded">99.99%</span></a>
				</div>
			</div>
			<div class="mt-6 flex flex-col md:flex-row items-center justify-between py-4 w-full border-t border-gray-600">
				<div class="flex text-gray-600">
					<a class="text-gray-600" href="#">
						<svg class="h-6 w-6 fill-current" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-285.9 385.7 26.5 22" xml="preserve" role="img">
                        <path fill="#8d98a1" d="M-269.3,386c-2.4,0.9-3.9,3.1-3.7,5.6l0.1,0.9l-1-0.1c-3.5-0.4-6.5-2-9.1-4.5l-1.3-1.3l-0.3,0.9c-0.7,2.1-0.2,4.3,1.2,5.7 c0.8,0.8,0.6,0.9-0.7,0.4c-0.5-0.2-0.9-0.3-0.9-0.2c-0.1,0.1,0.3,1.9,0.7,2.6c0.5,1,1.5,1.9,2.6,2.5l0.9,0.4l-1.1,0 c-1.1,0-1.1,0-1,0.4c0.4,1.3,1.9,2.6,3.6,3.2l1.2,0.4l-1,0.6c-1.5,0.9-3.3,1.4-5.1,1.4c-0.9,0-1.6,0.1-1.6,0.2 c0,0.2,2.3,1.3,3.7,1.7c4.1,1.3,8.9,0.7,12.6-1.4c2.6-1.5,5.2-4.6,6.4-7.5c0.7-1.6,1.3-4.4,1.3-5.8c0-0.9,0.1-1,1.1-2.1 c0.6-0.6,1.2-1.3,1.3-1.5c0.2-0.4,0.2-0.4-0.8,0c-1.6,0.6-1.9,0.5-1.1-0.4c0.6-0.6,1.3-1.7,1.3-2.1c0-0.1-0.3,0-0.6,0.2 c-0.3,0.2-1.1,0.5-1.7,0.7l-1,0.3l-0.9-0.6c-0.5-0.3-1.2-0.7-1.6-0.9C-266.9,385.6-268.4,385.7-269.3,386z"></path></svg>
                    </a>
					<a href="#">
						<svg class="ml-4 h-6 w-6 fill-current" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#8d98a1"><path d="M20,3.33355556 C20,1.582 18.4186667,0 16.6666667,0 L3.33333333,0 C1.58133333,0 0,1.582 0,3.33355556 L0,16.6664444 C0,18.418 1.58133333,20 3.33355556,20 L10,20 L10,12.4444444 L7.55555556,12.4444444 L7.55555556,9.11111111 L10,9.11111111 L10,7.81244444 C10,5.57266667 11.6817778,3.55555556 13.75,3.55555556 L16.4444444,3.55555556 L16.4444444,6.88888889 L13.75,6.88888889 C13.4551111,6.88888889 13.1111111,7.24688889 13.1111111,7.78311111 L13.1111111,9.11111111 L16.4444444,9.11111111 L16.4444444,12.4444444 L13.1111111,12.4444444 L13.1111111,20 L16.6666667,20 C18.4186667,20 20,18.418 20,16.6664444 L20,3.33355556 Z"></path></g></g></svg>
					</a>
					<a href="#">
						<svg class="ml-4 h-6 w-6 fill-current" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" role="img"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#8d98a1"><path d="M10.7358299,9.05316505 C10.74693,9.03496505 10.7625302,9.01306505 10.7778304,8.99176505 L10.7778304,9.05316505 L10.7358299,9.05316505 Z M16.9563347,16.7413593 L13.9355007,16.7413593 L13.9355007,11.9100805 C13.9355007,10.696181 13.4977552,9.86785022 12.4052981,9.86785022 C11.5695643,9.86785022 11.0734621,10.4266736 10.8556124,10.9662 C10.7748894,11.1588913 10.7548946,11.4283987 10.7548946,11.6975342 L10.7548946,16.7411734 L7.73457208,16.7411734 C7.73457208,16.7411734 7.77409657,8.5583491 7.73457208,7.71146523 L10.7553596,7.71146523 L10.7553596,8.99162555 C11.1563705,8.37649203 11.8729729,7.4990119 13.477156,7.4990119 C15.4654707,7.4990119 16.9563347,8.78884399 16.9563347,11.5636639 L16.9563347,16.7413593 Z M4.55280357,6.47798976 L4.53248332,6.47798976 C3.51912172,6.47798976 2.86222458,5.78497064 2.86222458,4.91734826 C2.86222458,4.03224231 3.53841897,3.35800873 4.57186832,3.35800873 C5.60541067,3.35800873 6.24115058,4.03205632 6.26123833,4.91734826 C6.26123833,5.78515663 5.60564317,6.47798976 4.55280357,6.47798976 Z M3.0415728,16.7413593 L6.06342984,16.7413593 L6.06342984,7.71160472 L3.0415728,7.71160472 L3.0415728,16.7413593 Z M18.5232253,0 L1.4777512,0 C0.661547082,0 0,0.641358883 0,1.43295561 L0,18.5664399 C0,19.3580366 0.661779579,20 1.4777512,20 L18.5232253,20 C19.3391969,20 20,19.3576181 20,18.5664399 L20,1.43295561 C20,0.641591377 19.3391969,0 18.5232253,0 Z"></path></g></g></svg>
					</a>
				</div>
				<div class="flex flex-col md:flex-row text-center text-gray-600">
					<img class="hidden md:block" src="/img/footer.png" />
					<p class="mt-4 md:mt-0 ml-2 text-sm text-gray-400">Made by hand in over 60 cities around the world.</p>
					<p class="mt-4 md:mt-0 ml-2 text-sm font-light">© 2019 Help Scout</p>
					<img class="mx-auto mt-4 md:hidden my-10 w-16" src="/img/certified.png"/>
				</div>
			</div>
		</div>
	</footer>
    
    

  );
}

export default Footer;
