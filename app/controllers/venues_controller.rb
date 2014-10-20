class VenuesController < ActionController::Base

	def index
		@venues = Venue.all

		respond_to do |format|
			format.html
			format.json {render json: @venues}
		end
	end

	def show
	end

end