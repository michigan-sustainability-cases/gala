class BlogPost < ApplicationRecord

  belongs_to :reader, :foreign_key => :author_id
  belongs_to :blog_category


end
