require 'rails_helper'

RSpec.describe "blog_categories/new", type: :view do
  before(:each) do
    assign(:blog_category, BlogCategory.new())
  end

  it "renders new blog_category form" do
    render

    assert_select "form[action=?][method=?]", blog_categories_path, "post" do
    end
  end
end
