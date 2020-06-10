require 'rails_helper'

RSpec.describe "blog_posts/index", type: :view do
  before(:each) do
    assign(:blog_posts, [
      BlogPost.create!(),
      BlogPost.create!()
    ])
  end

  it "renders a list of blog_posts" do
    render
  end
end
