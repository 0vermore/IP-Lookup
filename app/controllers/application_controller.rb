# frozen_string_literal: true

class ApplicationController < ActionController::API
  def get_ip_info(ip)
    response = Net::HTTP.get(URI("https://ipapi.co/#{ip}/json/"))
    return unless response

    json_response = JSON.parse(response)
    return json_response['reason'] if json_response['error']

    remove_recursively(json_response,
                       'version', 'region_code', 'country_code_iso3', 'country_tld',
                       'continent_code', 'in_eu', 'utc_offset', 'languages', 'country_area',
                       'country_population', 'asn', 'org')
  end

  def remove_recursively(hash, *to_remove)
    hash.each do |_key, val|
      hash.except!(*to_remove)

      remove_recursively(val, *to_remove) if val.is_a? Hash

      if val.is_a? Array
        val.each { |el| remove_recursively(el, *to_remove) if el.is_a? Hash }
      end
    end
  end
end
