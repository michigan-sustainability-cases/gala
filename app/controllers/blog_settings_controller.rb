class BlogSettingsController < ApplicationController


  def index
    @blog_settings = BlogSetting.all
  end

end
