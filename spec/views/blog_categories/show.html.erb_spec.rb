require 'rails_helper'

RSpec.describe "blog_categories/show", type: :view do
  before(:each) do
    @blog_category = assign(:blog_category, BlogCategory.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
