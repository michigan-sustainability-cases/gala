json.key_format! camelize: :lower
json.extract! edgenote, *%i{slug caption format thumbnail_url content
                            website_url embed_code instructions image_url
                            pdf_url photo_credit style pull_quote attribution
                            call_to_action audio_url youtube_slug}
