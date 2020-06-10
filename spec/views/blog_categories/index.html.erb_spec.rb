require 'rails_helper'

RSpec.describe "blog_categories/index", type: :view do
  before(:each) do
    assign(:blog_categories, [
      BlogCategory.create!(),
      BlogCategory.create!()
    ])
  end

  it "renders a list of blog_categories" do
    render
  end
end
