class CreateBlogPosts < ActiveRecord::Migration[6.0]
  def change
    create_table :blog_posts do |t|
      t.string        :title
      t.text          :body
      t.string        :cover_photo
      t.bigint        :author_id
      t.references    :blog_category
      t.boolean       :featured 
      t.timestamps
    end
  end
end
