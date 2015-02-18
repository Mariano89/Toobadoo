class HomeController < ApplicationController
	
	def index
		@resp = HTTParty.get("http://gdata.youtube.com/feeds/api/standardfeeds/most_popular?alt=json")
		
		vid = @resp['feed']['entry'].sample

		@vid = vid['content']['src']
		@title = vid['title']['$t']
	end


end
