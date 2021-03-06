﻿using System;
using System.Collections.Generic;

namespace ApiWeb.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderItems = new HashSet<OrderItems>();
        }

        public long OrderId { get; set; }
        public string OrderNo { get; set; }
        public int? CustomerId { get; set; }
        public string Pmethod { get; set; }
        public decimal? Gtotal { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual ICollection<OrderItems> OrderItems { get; set; }
    }
}
