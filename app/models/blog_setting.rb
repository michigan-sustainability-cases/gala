class BlogSetting < ApplicationRecord

  include Croppable

  has_one_attached :image, dependent: :destroy


  def self.default_image
    BlogSetting.where(:name => 'Default Image').first
  end

  def self.home_video_id
    BlogSetting.where(:name => 'Home Videop ID').first.value
  end

  def thumbnail(size = '130x')
    cropped_image(image, size)
  end

  private

  def delete_image
    self.image = nil
    self.save
  end

end
