export interface SearchData {
    data:       Data;
    status:     number;
    statusText: string;
    headers:    SearchDataHeaders;
    config:     Config;
    request:    Request;
}

export interface Config {
    transitional:      Transitional;
    adapter:           string[];
    transformRequest:  null[];
    transformResponse: null[];
    timeout:           number;
    xsrfCookieName:    string;
    xsrfHeaderName:    string;
    maxContentLength:  number;
    maxBodyLength:     number;
    env:               Request;
    headers:           ConfigHeaders;
    method:            string;
    url:               string;
}

export interface Request {
}

export interface ConfigHeaders {
    Accept:         string;
    "Content-Type": null;
}

export interface Transitional {
    silentJSONParsing:   boolean;
    forcedJSONParsing:   boolean;
    clarifyTimeoutError: boolean;
}

export interface Data {
    data:        Datum[];
    included:    Included[];
    meta:        Meta;
    suggestions: null;
}

export interface Datum {
    id:            string;
    type:          string;
    attributes:    DatumAttributes;
    relationships: Relationships;
}

export interface DatumAttributes {
    Explanation:                    null;
    FeaturesMap:                    null;
    active_options:                 ActiveOptions;
    availability_set:               boolean;
    average_ratings:                { [key: string]: number } | null;
    average_reviews:                AverageReviews | null;
    cancel_policy:                  string;
    cancel_policy_combo_bookings:   string;
    cancel_text:                    string;
    catalog:                        null;
    check_in:                       number;
    check_out:                      number;
    children_count:                 number;
    coachnet_ready:                 boolean;
    coachnet_required:              boolean;
    combined_special_hours:         any[];
    created:                        Date;
    current_location_id:            number;
    custom_insurance_text:          string;
    dealer:                         boolean;
    delivery:                       boolean;
    delivery_radius:                number;
    delivery_usage_item_id:         number;
    deposit_percentage:             number;
    description:                    string;
    description_included:           string;
    description_other:              string;
    description_recommendations:    string;
    display_vehicle_type:           string;
    distributed_ratings:            DistributedRatings | null;
    education:                      any[];
    external:                       boolean;
    favorite:                       boolean;
    favorite_count:                 number;
    features:                       Features;
    first_published:                Date;
    generator_usage_item_id:        number;
    group_on_map:                   boolean;
    group_reviews_num:              number;
    group_reviews_score:            number;
    group_score:                    number;
    has_been_published:             boolean;
    has_checkout_questions:         boolean;
    hidden:                         boolean;
    host_notes:                     string;
    house_rules:                    string;
    instant_book:                   boolean;
    instant_book_leeway:            number;
    insurance_coverage:             string;
    insurance_eligible:             boolean;
    insurance_plan:                 InsurancePlan;
    insurance_renter_adjustable:    boolean;
    insurance_state:                InsuranceState;
    last_published:                 Date;
    listing_questions:              ListingQuestion[];
    locale:                         Locale;
    location:                       Location;
    mileage_usage_item_id:          number;
    minimum_days:                   number;
    minimum_deposit:                number;
    monthly_discount:               number;
    name:                           string;
    nearby_content:                 any[];
    original_url:                   string;
    owner_score:                    number;
    parent_id:                      number;
    position:                       number;
    preferred_primary_image:        PreferredPrimaryImageClass;
    prep_fee:                       PrepFee;
    presentment_currency:           string;
    price_per_day:                  number;
    price_per_month:                number;
    price_per_week:                 number;
    primary_image_url:              string;
    pro:                            boolean;
    published:                      boolean;
    ranking:                        Ranking;
    rental_category:                string;
    rental_score:                   number;
    request_less_than_minimum_days: number;
    review_scores:                  ReviewScores | null;
    reviews_num:                    number;
    score:                          number;
    seatbelts:                      number;
    security_deposit:               number;
    seo_content:                    SEOContent;
    settlement_currency:            string;
    sleeps:                         number;
    sleeps_adults:                  number;
    sleeps_kids:                    number;
    slug:                           string;
    smart_photo_score:              number;
    sort_score:                     number;
    stay:                           null;
    stay_catalog:                   null;
    summary:                        string;
    tags:                           any[];
    tax_rates:                      any[];
    type:                           string;
    unavailable:                    boolean;
    updated:                        Date;
    use_day_pricing:                boolean;
    use_tax_inclusive_pricing:      boolean;
    user_slug:                      string;
    vehicle_amps:                   number;
    vehicle_box_length:             number;
    vehicle_class:                  string;
    vehicle_dry_weight:             number;
    vehicle_gvwr:                   number;
    vehicle_height:                 number;
    vehicle_length:                 number;
    vehicle_length_with_hitch:      number;
    vehicle_license_plate_state:    string;
    vehicle_make:                   string;
    vehicle_model:                  string;
    vehicle_title:                  string;
    vehicle_width:                  number;
    vehicle_year:                   number;
    weekly_discount:                number;
}

export interface ActiveOptions {
    cancel_policy:                string;
    cancel_policy_combo_bookings: string;
    date:                         Date;
    instant_book:                 boolean;
    minimum_days:                 number;
    monthly_discount_percentage:  number;
    monthly_rate_per_day:         number;
    price_per_day:                number;
    price_per_month:              number;
    price_per_week:               number;
    tax:                          number;
    use_day_pricing:              boolean;
    use_tax_inclusive_pricing:    boolean;
    weekly_discount_percentage:   number;
    weekly_rate_per_day:          number;
}

export interface AverageReviews {
    owner:  Owner[];
    rental: Owner[];
    score:  number;
}

export interface Owner {
    key:        string;
    name:       string;
    percentage: number;
    score:      number;
}

export interface DistributedRatings {
    score: Score;
}

export interface Score {
    r1: number;
    r2: number;
    r3: number;
    r4: number;
    r5: number;
}

export interface Features {
    air_conditioner:              boolean;
    audio_inputs:                 boolean;
    awning:                       boolean;
    backup_camera:                boolean;
    beds_bunk:                    number | null;
    beds_dinette_conversion:      null;
    beds_fold_out_sofa:           number | null;
    beds_full:                    number;
    beds_king:                    number;
    beds_other:                   null;
    beds_queen:                   number;
    beds_twin:                    number;
    bike_rack:                    boolean;
    brake_controller:             boolean;
    burning_man_friendly:         boolean;
    cd_player:                    boolean;
    ceiling_fan:                  boolean;
    connector_type:               null | string;
    dining_table:                 boolean;
    extra_storage:                boolean;
    festival_friendly:            boolean;
    generator:                    boolean;
    gray_tank:                    number;
    handicap_accessible:          boolean;
    heater:                       boolean;
    hitch_weight:                 number;
    hookup_electric:              boolean;
    hookup_sewer:                 boolean;
    hookup_water:                 boolean;
    hot_water_tank:               boolean;
    inside_shower:                boolean;
    international_travel_allowed: boolean;
    inverter:                     boolean;
    kitchen_sink:                 boolean;
    leveling_jacks:               boolean;
    microwave:                    boolean;
    minimum_age:                  number;
    mpg:                          number;
    one_way_rentals:              boolean;
    outside_shower:               boolean;
    oven:                         boolean;
    pet_friendly:                 boolean;
    propane_tank:                 number;
    provides_receivers:           boolean;
    radio:                        boolean;
    refrigerator:                 boolean;
    satellite:                    boolean;
    sewage_tank:                  number;
    skylight:                     boolean;
    slide_outs:                   number;
    smoking_allowed:              boolean;
    solar:                        boolean;
    stove:                        boolean;
    tailgate_friendly:            boolean;
    toilet:                       boolean;
    tow_hitch:                    boolean;
    trailer_weight:               number;
    tv_dvd:                       boolean;
    washer_dryer:                 boolean;
    water_tank:                   number;
    wifi:                         boolean;
    base_weight?:                 number;
    carrying_capacity?:           number;
    fuel_tank?:                   number;
    fuel_type?:                   string;
    gross_vehicle_weight?:        number;
    transmission?:                string;
}

export interface InsurancePlan {
    id:                           number;
    label:                        string;
    renter_body:                  string;
    renter_headline:              string;
    requires_driver_verification: boolean;
}

export enum InsuranceState {
    Approved = "approved",
    Empty = "",
}

export interface ListingQuestion {
    answer:   string;
    question: string;
}

export interface Locale {
    base_currency: string;
    distance_unit: string;
    length_unit:   string;
    liquid_unit:   string;
    weight_unit:   string;
}

export interface Location {
    city:    string;
    country: string;
    county:  string;
    lat:     number;
    lng:     number;
    state:   string;
    zip:     string;
}

export interface PreferredPrimaryImageClass {
    amenity:      null;
    best:         boolean;
    category:     AttributesCategory | null;
    description:  string;
    position:     number;
    primary:      boolean;
    rental_id:    number;
    review:       null;
    skip_enhance: boolean;
    status:       InsuranceState;
    tags:         string;
    url:          string;
    video:        boolean;
}

export interface AttributesCategory {
    name: string;
    slug: string;
}

export interface PrepFee {
    amount:      number;
    description: string;
}

export interface Ranking {
    distance_weight:      DistanceWeight;
    distance_weight_prod: number;
    is_new_listing:       number;
    model_name:           string;
    original_score:       number;
    ranking_score:        number;
    ranking_score2:       number;
    ranking_score3:       number;
}

export interface DistanceWeight {
    control: number;
    test_1:  number;
    test_2:  number;
    test_3:  number;
}

export interface ReviewScores {
    bayesian_rating: number;
}

export interface SEOContent {
    category: CategoryElement[];
}

export interface CategoryElement {
    id:    number;
    title: string;
    url:   string;
}

export interface Relationships {
    images:                Images;
    mileage_usage_item:    GeneratorUsageItem;
    owner:                 GeneratorUsageItem;
    primary_image:         GeneratorUsageItem;
    generator_usage_item?: GeneratorUsageItem;
}

export interface GeneratorUsageItem {
    data: DAT;
}

export interface DAT {
    id:   string;
    type: Type;
}

export enum Type {
    Images = "images",
    UsageBasedItem = "usage_based_item",
    Users = "users",
}

export interface Images {
    data: DAT[];
}

export interface Included {
    id:         string;
    type:       Type;
    attributes: PreferredPrimaryImageClass;
}

export interface Meta {
    radius:            number;
    lat:               number;
    lng:               number;
    city:              string;
    state:             string;
    country:           string;
    country_code:      string;
    country_name:      string;
    total:             number;
    total_unavailable: number;
    start_position:    number;
    stop_position:     number;
    price_max:         number;
    price_min:         number;
    price_average:     number;
    price_median:      number;
    price_histogram:   PriceHistogram;
    vehicle_types:     VehicleType[];
    locale:            string;
    suggested:         boolean;
    experiments:       Request;
    experiments_data:  Request;
    request:           Request;
    FlexibleDates:     null;
    is_blended:        boolean;
}

export interface PriceHistogram {
    data:      number[];
    max_value: number;
}

export interface VehicleType {
    type:  string;
    label: string;
    style: Style;
}

export enum Style {
    Both = "both",
    Drivable = "drivable",
    Towable = "towable",
}

export interface SearchDataHeaders {
    "content-type": string;
}
