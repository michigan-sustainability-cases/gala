json.extract! blog_post, :id, :title, :body, :blog_category_id, :cover_photo_url, :created_at, :updated_at
json.url blog_post_url(blog_post, format: :json)
if blog_post.cover_photo.attached?
  json.cover_photo_url Rails.application.routes.url_helpers.rails_blob_path(blog_post.cover_photo, only_path: false)
else
  json.cover_photo_url Rails.application.routes.url_helpers.rails_blob_path(BlogSetting.default_image.image, only_path: false)
end
