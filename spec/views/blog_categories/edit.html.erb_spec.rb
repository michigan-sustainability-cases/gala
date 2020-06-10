require 'rails_helper'

RSpec.describe "blog_categories/edit", type: :view do
  before(:each) do
    @blog_category = assign(:blog_category, BlogCategory.create!())
  end

  it "renders the edit blog_category form" do
    render

    assert_select "form[action=?][method=?]", blog_category_path(@blog_category), "post" do
    end
  end
end
