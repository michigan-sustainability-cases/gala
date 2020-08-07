class BlogPostSerializer < ApplicationSerializer

  attributes :id, :title, :body, :featured, :photo_url

  def photo_url
    if object.cover_photo.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.cover_photo, only_path: false)
    end
  end
end
