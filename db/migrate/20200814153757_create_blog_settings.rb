class CreateBlogSettings < ActiveRecord::Migration[6.0]
  def change
    create_table :blog_settings do |t|
      t.string        :name
      t.string        :value
      t.string        :image
      t.json          :crop_settings
      t.timestamps
    end
  end
end
