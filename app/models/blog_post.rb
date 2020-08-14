class BlogPost < ApplicationRecord

  include Croppable

  belongs_to :author, :class_name => "Reader", :foreign_key => :author_id, :optional => true
  belongs_to :blog_category

  has_one_attached :cover_photo, dependent: :destroy

  def cover_photo_url
    if cover_photo.attached?
      self.thumbnail
    else
      BlogSetting.default_image.thumbnail
    end
  end

  def thumbnail(size = '130x')
    cropped_image(cover_photo, size)
  end

  private

  def delete_cover_photo
    self.cover_photo = nil
    self.save
  end

end
