class HomeController < ApplicationController
	
	def index
		@resp = HTTParty.get("https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true&key=AIzaSyD473gmLA8qKL0aHbEuubsArlyQBho_lME")
	end


end
