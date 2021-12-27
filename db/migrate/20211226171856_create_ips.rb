class CreateIps < ActiveRecord::Migration[7.0]
  def change
    create_table :ips do |t|
      t.string :ip
      t.string :city
      t.string :region
      t.string :country
      t.string :country_name
      t.string :country_code
      t.string :country_capital
      t.string :postal
      t.float :latitude
      t.float :longitude
      t.string :timezone
      t.string :country_calling_code
      t.string :currency
      t.string :currency_name

      t.timestamps
    end
  end
end
