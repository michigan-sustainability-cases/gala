class BlogPost < ApplicationRecord

  belongs_to :reader, :foreign_key => :author_id, :optional => true
  belongs_to :blog_category

end
