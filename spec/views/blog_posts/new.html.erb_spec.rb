require 'rails_helper'

RSpec.describe "blog_posts/new", type: :view do
  before(:each) do
    assign(:blog_post, BlogPost.new())
  end

  it "renders new blog_post form" do
    render

    assert_select "form[action=?][method=?]", blog_posts_path, "post" do
    end
  end
end
