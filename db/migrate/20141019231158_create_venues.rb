class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues do |t|
    	t.float :latitude
    	t.float :longitude
    end
  end
end
