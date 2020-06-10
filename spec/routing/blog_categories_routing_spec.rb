require "rails_helper"

RSpec.describe BlogCategoriesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/blog_categories").to route_to("blog_categories#index")
    end

    it "routes to #new" do
      expect(get: "/blog_categories/new").to route_to("blog_categories#new")
    end

    it "routes to #show" do
      expect(get: "/blog_categories/1").to route_to("blog_categories#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/blog_categories/1/edit").to route_to("blog_categories#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/blog_categories").to route_to("blog_categories#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/blog_categories/1").to route_to("blog_categories#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/blog_categories/1").to route_to("blog_categories#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/blog_categories/1").to route_to("blog_categories#destroy", id: "1")
    end
  end
end
