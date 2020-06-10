require "rails_helper"

RSpec.describe BlogPostsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/blog_posts").to route_to("blog_posts#index")
    end

    it "routes to #new" do
      expect(get: "/blog_posts/new").to route_to("blog_posts#new")
    end

    it "routes to #show" do
      expect(get: "/blog_posts/1").to route_to("blog_posts#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/blog_posts/1/edit").to route_to("blog_posts#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/blog_posts").to route_to("blog_posts#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/blog_posts/1").to route_to("blog_posts#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/blog_posts/1").to route_to("blog_posts#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/blog_posts/1").to route_to("blog_posts#destroy", id: "1")
    end
  end
end
