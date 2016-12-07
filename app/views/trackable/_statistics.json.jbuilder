if current_user.has_cached_role? :editor
  json.cache! [trackable, 'statistics'], expires_in: 10.minute do
    json.statistics do
      json.(trackable, :views, :uniques, :average_time)
    end
  end
end
