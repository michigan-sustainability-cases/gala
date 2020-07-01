class AddCropSettingsToBlogPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :blog_posts, :crop_settings, :json
  end
end
